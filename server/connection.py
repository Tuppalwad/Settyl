import pymongo
from pymongo import MongoClient
from mogoconfig import username, password
import os


def database():
    try:
        client = MongoClient(
            f"mongodb://{username}:{password}@ac-sx0sakj-shard-00-00.exuh54g.mongodb.net:27017,ac-sx0sakj-shard-00-01.exuh54g.mongodb.net:27017,ac-sx0sakj-shard-00-02.exuh54g.mongodb.net:27017/?ssl=true&replicaSet=atlas-akxlip-shard-0&authSource=admin&retryWrites=true&w=majority"
        )
        db = client.get_database("API")
        collection = db["Apidata"]

        return collection

    except Exception as e:
        print(e)
        print("error in connection")
