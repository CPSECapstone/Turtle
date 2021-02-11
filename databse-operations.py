import pymongo;
from pymongo import MongoClient;

def connect () :
    cluster = MongoClient("mongodb+srv://MZR7dGZeXM7j6vt4:cloudHavenPass@cluster0.k4go8.mongodb.net/Turtle?retryWrites=true&w=majority");
    db = cluster["Turtle"];
    collection = db["users"];
    return collection;


def write_to_db (collection, post) :
    collection.insert_one(post);

def find_in_db (collection, query) :
    results = collection.find_one(query);
    print(results);


def delete_in_db (colleciton, query) :
    collection.delete_one(query);

def delete_all_in_db (collection) :
    collection.delete_many({})


