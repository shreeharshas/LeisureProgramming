
var fs = require('fs'), filename = "data.txt";
//read from text file start
fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	console.log('OK: ' + filename);
	console.log(data);
});
//read from text file end

//database operation start
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
	
	if(!err) {
		console.log("connected to db");
		
		//write to db start
  		console.log("starting write...");
  		db.createCollection('test', function(err, collection) {});

		var collection = db.collection('test');
		/*var doc1 = {'hello':'doc1'};
		var doc2 = {'hello':'doc2'};*/
		var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

		/*collection.insert(doc1);
		collection.insert(doc2, {w:1}, function(err, result) {});*/
		collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
		console.log("write complete");
		//write to db end

		//read from db start
		var collection = db.collection('test');
		var readData = collection.find();
		if(readData!=null){
			console.log(readData);
		}
		//read from db end
		console.log("read complete");
	}else{
	console.log('unable to connect to db');
	}
});
//database operation end