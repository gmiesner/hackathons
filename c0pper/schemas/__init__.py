from fastjsonschema import compile, JsonSchemaException
import json
import os

POST = json.load(open(f"{os.getcwd()}/{__name__}/post.json", "r"))
POST_VALIDATOR = compile(POST)
