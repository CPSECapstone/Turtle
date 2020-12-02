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

query = {
    "name": "Rohan"
};


def main () :

    collection = connect();
    i = 0;
    while (i < 50) :
        post = {
            "name": "user" + str(i),
            "email": "user" + str(i) + "@gmail.com",
            "password": "$2a$10$L8IG0Nsow2OOKgRdBJMDSe.DPadRpYODvm7VvYfIiEgVU1mmugFA6",
            "date": "2020-12-02T06:07:53.289+00:00",
            "__v": str(i)
        };
        write_to_db(collection, post);
        i += 1;

    delete_all_in_db(collection);
    
main();

