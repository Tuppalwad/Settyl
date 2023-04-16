from flask import Flask, request
from connection import database
from flask_cors import CORS
from flask import jsonify
import json

app = Flask(__name__)

api = database()

CORS(app)


@app.route("/getapi", methods=["get"])
def getapi():
    # how to get data from mongodb using python flask
    try:
        apidata = []
        for i in api.find():
            apidata.append(
                {
                    "id": str(i["_id"]),
                    "name": i["name"],
                    "age": i["age"],
                    "address": i["address"],
                    "department": i["department"],
                    "Employee_status": i["Employee_status"],
                }
            )
        return json.dumps(apidata)

    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)
