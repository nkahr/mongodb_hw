var MongoClient = require('mongodb').MongoClient;

var CountriesQuery = function() {
  this.url = "mongodb://localhost:27017/countries";
};

CountriesQuery.prototype = {
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        var collection = db.collection('countries');
        collection.find().toArray(function(err, docs) {
          onQueryFinished(docs);
        });
      }
    });
  }
}

module.exports = CountriesQuery;