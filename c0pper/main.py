from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from google.cloud import datastore, storage
import time
from uuid import uuid4

from schemas import JsonSchemaException, POST_VALIDATOR

datastore_client = datastore.Client()
storage_client = storage.Client()
bucket = storage_client.bucket("rate-your-cop.appspot.com")

app = Flask(__name__)
CORS(app)


@app.route("/api/ratings", methods=["GET", "POST"])
def rate():
    # Handle get method
    if request.method == "GET":
        # Ensure department parameter exists
        if request.args.get("department") is None:
            return jsonify({"status": "error", "reason": "query parameter 'department' is required"}), 400

        # Construct query for all posts with matching department
        query = datastore_client.query(kind="Post")
        query.add_filter("department", "=", request.args.get("department"))

        # Retrieve all posts
        entities = [entity for entity in query.fetch()]
        return jsonify({"status": "success", "data": entities})

    # Validate request body by schema in `./schemas/post.json`
    try:
        POST_VALIDATOR(request.json)
    except JsonSchemaException as e:
        return jsonify({"status": "error", "reason": f"invalid json format: {e}"}), 400

    # Create key and associated entity
    key = datastore_client.key("Post")
    entity = datastore.Entity(key)
    entity.update({
        "date": time.time(),
        "department": request.json['department'],
        "badge": request.json['badge'],
        "comments": request.json['comments'],
        "latitude": request.json["location"][0],
        "longitude": request.json['location'][1],
        "friendliness": request.json['ratings']['friendliness'],
        "difficulty": request.json['ratings']['difficulty'],
        "appropriateness": request.json['ratings']['appropriateness'],
        "helpfulness": request.json['ratings']['helpfulness'],
        "nonviolence": request.json['ratings']['nonviolence'],
        "race": request.json['tags']['race'],
        "gender": request.json['tags']['gender'],
        "age": request.json['tags']['age'],
        "image": ""
    })

    # Insert into datastore
    datastore_client.put(entity)

    return jsonify({"status": "success", "data": {"id": entity.id}})


@app.route("/api/ratings/<int:key>", methods=["POST"])
def upload_photo(key):
    # Ensure image exists in request
    if "image" not in request.files:
        return jsonify({"status": "error", "reason": "expected file 'image'"}), 400
    elif request.files["image"].filename == "":
        return jsonify({"status": "error", "reason": "no image selected"}), 400

    # Ensure key exists
    key = datastore_client.key("Post", key)
    entity = datastore_client.get(key)
    if entity is None:
        return jsonify({"status": "error", "reason": "post does not exist"}), 404

    # Change filename to prevent directory traversal
    image = request.files["image"]
    image.filename = str(uuid4())

    # Ensure image content type
    if image.mimetype != "image/png" and image.mimetype != "image/jpeg":
        return jsonify({"status": "error", "reason": "file must be a png or jpeg image"}), 400

    # Upload to bucket
    blob = storage.Blob(image.filename, bucket)
    blob.upload_from_file(image, True, content_type=image.mimetype, predefined_acl="publicRead")

    # Update entity data
    entity.update({"image": blob.public_url})
    datastore_client.put(entity)

    return jsonify({"status": "success"})


@app.route("/api/departments/<string:state>")
def departments_for_state(state):
    # Ensure state code is consistent with those in datastore
    state = state.upper()
    if len(state) != 2:
        return jsonify({"status": "error", "reason": "state code must be two characters long"}), 400

    # Construct query for all departments with matching state abbreviation
    query = datastore_client.query(kind="Department")
    query.add_filter("state_code", "=", state)

    # Retrieve all departments
    entities = [entity for entity in query.fetch()]
    return jsonify({"status": "success", "data": entities})


@app.route("/api/ratings/area")
def lat_long_query():
    # Checks for latitude and longitude, returns error if not received.
    if request.args.get("latitude") is None:
        return jsonify({"status": "error", "reason": "query parameter 'latitude' is required"}), 400
    elif request.args.get("latitude") is None:
        return jsonify({"status": "error", "reason": "query parameter 'latitude' is required"}), 400

    # Ensure correct datatypes
    try:
        latitude = float(request.args.get("latitude"))
        longitude = float(request.args.get("longitude"))
    except ValueError:
        return jsonify({"status": "error", "reason": "query parameters 'latitude' and 'longitude' must be floats"}), 400

    # Construct query for all departments with matching long + lat abbreviation
    query = datastore_client.query(kind="Post")
    query.add_filter("latitude", ">=", latitude - 1.0)
    query.add_filter("latitude", "<=", latitude + 1.0)

    # Retrieve the area from the long + lat.
    entities = [entity for entity in query.fetch()]

    # Filter resulting by longitude
    entities = list(filter(lambda entity: longitude - 1.0 <= entity["longitude"] <= longitude + 1.0, entities))

    return jsonify({"status": "success", "data": entities})


@app.route("/api/ratings/since")
def ratings_since_time():
    if request.args.get("time") is None:
        return jsonify({"query parameter 'time' is required"}), 400

    try:
        t = float(request.args.get("time"))
    except ValueError:
        return jsonify({"status": "error", "reason": "query parameter 'time' must be a float"}), 400

    query = datastore_client.query(kind="Post")
    query.add_filter("date", ">=", t)

    entities = [entity for entity in query.fetch()]
    return jsonify({"status": "success", "data": entities})


@app.route("/", defaults={"path": "index.html"})
@app.route("/<path:path>")
def render(path):
    return render_template(path)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080)
