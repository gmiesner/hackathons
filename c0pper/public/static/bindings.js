const url = "https://rate-your-cop.uc.r.appspot.com";

// Helper function
async function sendRequest(method, path, body= null) {
    // Build request
    let options = { method: method }

    // Add options for POST/PUT requests
    if ((method === "POST" || method === "PUT") && body !== null) options.headers = {"Content-Type": "application/json"};
    if (body !== null) options.body = JSON.stringify(body);

    // Send & parse requests
    let response = await fetch(`${url}${path}`, options);
    let json = await response.json();

    // Generate return data
    let base = { code: response.status, success: response.ok }
    if (response.ok) base.data = json.data;
    else base.reason = json.reason;

    return base;
}

class Ratings {
    /**
     * Rate a police officer
     *
     * @param {number} badge - the badge number
     * @param {string} department - the name of the police department
     * @param {Object} ratings - ratings of the officer from 0 to 5
     * @param {number} ratings.friendliness - how friendly the officer was
     * @param {number} ratings.difficulty - how difficult the officer was
     * @param {number} ratings.appropriateness - how appropriate the officer was
     * @param {number} ratings.helpfulness - how helpful the officer was
     * @param {number} ratings.nonviolent - how nonviolent the officer was
     * @param {Object} tags - descriptors of the officer
     * @param {string} tags.race - the race of the officer
     * @param {string} tags.gender - the gender of the officer
     * @param {number} tags.age - the approximate age of the officer
     * @param {string} comments - additional comments on the post
     * @param {number[]} location - the latitude and longitude of the nearest landmark
     * @returns {Promise<{code: number, success: boolean, reason?: string, data?: Object}>} - the response of the API
     */
    static async create(badge, department, ratings, tags, comments, location) {
        return await sendRequest("POST", "/api/ratings", {
            badge: badge,
            department: department,
            ratings: ratings,
            tags: tags,
            comments: comments,
            location: location
        });
    }

    /**
     * Upload the badge image
     *
     * @param {number} id - post to associate the file with
     * @param {File} file - image to upload
     * @returns {Promise<{code: number, success: boolean, reason?: string, data?: Object}>}
     */
    static async upload_photo(id, file) {
        // Set file into data
        let data = new FormData();
        data.append("image", file);

        // Send & parse requests
        let response = await fetch(`${url}/api/ratings/${id}`, {
            method: "POST",
            body: data
        });
        let json = await response.json();

        // Generate return data
        let base = { code: response.status, success: response.ok };
        if (response.ok) base.data = json.data;
        else base.reason = json.reason;

        return base;
    }

    /**
     * Retrieve all ratings for a given police department
     *
     * @param {string} department - police department to get ratings for
     * @returns {Promise<{code: number, success: boolean, reason?: string, data?: Object}>} - the response from the API
     */
    static async list(department) {
        return await sendRequest("GET", `/api/ratings?department=${department}`);
    }

    /**
     * Retrieve all ratings around a given point
     *
     * @param {number} latitude - latitude of the center point
     * @param {number} longitude - longitude of the center point
     * @returns {Promise<{code: number, success: boolean, reason?: string, data?: Object}>} - the response from the API
     */
    static async list_by_area(latitude, longitude) {
        return await sendRequest("GET", `/api/ratings/area?longitude=${longitude}&latitude=${latitude}`);
    }
}

class Departments {
    /**
     * Get a list of all police departments by state
     *
     * @param {string} state - the two character abbreviation of the state
     * @returns {Promise<{code: number, success: boolean, reason?: string, data?: Object}>} - the response of the API
     */
    static async list_by_state(state) {
        return await sendRequest("GET", `/api/departments/${state}`);
    }
}
