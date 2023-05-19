var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:example@localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mongo_practica");
  dbo.createCollection("series", function(err, result) {
    if (err) throw err;
    console.log(result.name);
    
  });
  
  //Problema 1
  var contenido=[
  {title: "Stranger Things",genre: ["Drama", "Fantasy", "Horror"],seasons: 4,releaseYear: 2016,rating: 8.8},
  {title: "Narcos",genre: ["Crime", "Drama", "Thriller"],seasons: 3,releaseYear: 2015,rating: 8.8,synopsis: "Narcos es una serie que narra las vivencias delnarcotraficante Pablo Escobar y los esfuerzos de la DEA por capturarlo.Ambientada en la década de 1980 en Colombia, la serie muestra el auge y la caída del imperio del narcotráfico de Escobar, así comolos peligros y la violencia que rodean el mundo del narcotráfico."},
  {title: "Money Heist",genre: ["Action", "Crime", "Mystery"],seasons: 5,releaseYear: 2017,rating: 8.3},
  {title: "The Crown",genre: ["Biography", "Drama", "History"],seasons: 5,releaseYear: 2016,rating: 8.7},
  {title: "Black Mirror",genre: ["Drama", "Sci-Fi", "Thriller"],seasons: 5,releaseYear: 2011,rating: 8.8},
  {title: "Breaking Bad",genre: ["Crime", "Drama", "Thriller"],seasons: 5,releaseYear: 2008,rating: 9.5},
  {title: "Friends",genre: ["Comedy", "Romance"],seasons: 10,releaseYear: 1994,rating: 8.9},
  {title: "The Witcher",genre: ["Action", "Adventure", "Fantasy"],seasons: 2,releaseYear: 2019,rating: 8.2},
  {title: "The Mandalorian",genre: ["Action", "Adventure", "Fantasy"],seasons: 3,releaseYear: 2019,rating: 8.8},
  {title: "Peaky Blinders",genre: ["Crime", "Drama"],seasons: 6,releaseYear: 2013,rating: 8.8},
  {title: "Sherlock",genre: ["Crime", "Drama", "Mystery"],seasons: 4,releaseYear: 2010,rating: 9.1},
  {title: "Dark",genre: ["Crime", "Drama", "Mystery", "Sci-Fi", "Thriller"],seasons: 3,releaseYear: 2017,rating: 8.8},
  {title: "El Internado"},{title: "La casa de Papel"},
  {title: "Game of Thrones",genre: ["Adventure", "Drama", "Fantasy"],seasons: 8,releaseYear: 2011,rating: 9.3,synopsis: "Game of Thrones es una serie épica que se desarrolla en los Siete Reinos de Westeros. Basada en las novelas de GeorgeR.R. Martin, la serie sigue las luchas de poder entre las casas nobles mientras se preparan para enfrentar la llegada del invierno y laamenaza de los Caminantes Blancos. Intriga, traición y batallas épicas se entrelazan en esta historia que ha cautivado a millones de espectadores en todo el mundo."}]
  dbo.collection("series").insertMany(contenido, function(err, res) {
    if (err) throw err;
    console.log("Series insertadas: " + res.insertedCount);
  });
  
  //Problema 2
  dbo.collection("series").find({genre:"Drama"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").updateOne({title:/.Narcos./}, {$set:{"rating":9.0}}, function(err, res) {
    if (err) throw err;
    console.log("Narcos ahora tiene un 9.0 de calificación");
  });
  dbo.collection("series").find({rating:{$gt:9.0}}).sort({"releaseYear":1}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({rating:{$gt:9.0}}).sort({"releaseYear":1}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$and:[{genre:"Thriller"},{synopsis:{$exist:true}}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$and:[{rating:{$gt:9.0}},{genre:"Drama"}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({}).sort({"title":-1}).limit(1).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$and:[{"releaseYear":{$gte:2017}},{genre:"Mystery"}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({title:/.T/}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({}).sort({"rating":-1}).limit(1).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({synopsis:/.epic./}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$and:[{"releaseYear":{$gt:2015}},{rating:{$gte:8.5}}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$or:[{genre:"Fantasy"},{genre:"Sci-Fi"}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({}).sort({"seasons":1}).limit(1).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  
  
  //Problema 3
  
  dbo.collection("series").find({synopsis:/.narcotraficante./}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$and:[{synopsis:{$in:["violencia"]}},{synopsis:{$nin:["drogas"]}}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({synopsis:{$in:["amigos","amistad"]}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({synopsis:/.reino del narcotrafico./}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({synopsis:/S./}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$or:[{synopsis:/.aventura./},{synopsis:/.fantasia./}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$and:[{synopsis:/.misterio./},{rating:{$gte:8.5}}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("series").find({$and:[{synopsis:/.drama./},{seasons:{$gt:5}}]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  
  //Problema 4
  
  dbo.collection("series").updateOne({title:"Stranger Things"}, {$set:{"synopsis":"Stranger Things es una emocionante serie que sigue las aventuras de un grupo de amigos en la pequeña ciudad de Hawkins. Cuando uno de ellos desaparece misteriosamente, descubren un mundo paralelo lleno de criaturas aterradoras y secretos oscuros."}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").updateOne({title:"Money Heist"},{$set:{"seasons":6}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").updateOne({title:"Breaking Bad"},{$set:{"rating":9.7}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").updateOne({title:"Friends"},{$push:{genre:"Romance"}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").updateOne({title:"Peaky Blinders"},{$set:{"releaseYear":2011}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").updateOne({title:"Stranger Things"},{$set:{"releaseYear":2015}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").updateOne({title:"Narcos"},{$inc: {seasons:1}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").updateOne({title:"Game of thrones"},{$push:{genre:"Action"}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  
  //Problema 5
  
  dbo.collection("series").deleteOne({"title":"Friends"}, function(err, obj) {
    if (err) throw err;
    console.log("documento eliminado");
  });
  dbo.collection("series").updateOne({title:"Black Mirror"},{$unset:"rating"}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").deleteMany({rating:{$lt:8.5}}, function(err, obj) {
    if (err) throw err;
    console.log("documento eliminado");
  });
  dbo.collection("series").updateMany({},{$pull:{genre:"Mystery"}}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").updateOne({title:"Narcos"},{$unset:"synopsis"}, function(err, res) {
    if (err) throw err;
    console.log("Serie actualizada");
  });
  dbo.collection("series").deleteMany({$and:[{rating:{$lt:8.5}},{genre:"Drama"}]}, function(err, obj) {
    if (err) throw err;
    console.log("documento eliminado");
  });
  dbo.collection("series").deleteMany({$or:[{"title":"Black Mirror"},{"title":"The Crown"}]}, function(err, obj) {
    if (err) throw err;
    console.log("documento eliminado");
  });
  dbo.collection("series").deleteMany({$and:[{"genre":"Crime"},{"releaseYear":2015}]}, function(err, obj) {
    if (err) throw err;
    console.log("documento eliminado");
  });
  dbo.collection("series").deleteMany({synopsis:{$exist:false}}, function(err, obj) {
    if (err) throw err;
    console.log("documento eliminado");
  });
  dbo.collection("series").drop({synopsis:{$exist:false}}, function(err, obj) {
    if (err) throw err;
    console.log("documento eliminado");
  });
  
  //Problema 6
  
  db.collection("series").createIndex({title:1})
  db.collection("series").createIndex({$and:[{title:/.Drama./},{languaje:"inglés"}]})//no hay idioma pero el enunciado dice que si
  db.collection("series").createIndex({genre:1,rating:1})
  db.collection("series").createIndex({title:-1,rating:1})
  db.db(dbWeb).collection(coll).getIndexes( (err, res) => {
	  if (err) throw err;
        console.log(res);
    });
  //Problema 7
  dbo.createCollection("users", function(err, result) {
    if (err) throw err;
    console.log(result.name);
    
  });
  db.collection("users").insertMany([{username: "SuperCoder123",first_name: "Super",last_name: "Coder"},
  {username: "TechGuru99",full_name: {first: "Tech",last: "Guru"}}]);
  dbo.createCollection("posts", function(err, result) {
    if (err) throw err;
    console.log(result.name);
  });
  db.createcollection("posts");
  contenido=[{username: "SuperCoder123",title: "Solves a coding challenge",body: "Optimizes the algorithm and achieves maximum efficiency."},
  {username: "SuperCoder123",title: "Shares coding tutorials",body: "Helps aspiring coders with step-by-step guides and examples."},
  {username: "TechGuru99",title: "Discovers a software vulnerability",body: "Reports it to the developers for prompt fixing."},
  {username: "TechGuru99",title: "Creates an innovative tech product",body: "Introduces a groundbreaking invention to simplify everyday tasks"}];
  dbo.collection("posts").insertMany(contenido, function(err, res) {
    if (err) throw err;
    console.log("Series insertadas: " + res.insertedCount);
  });
  db.createcollection("comments");
  dbo.collection("comments").insertOne({username: "SuperCoder123",comment: "Hope you got a good deal!",post:posts.find({'title':"Solves a coding challenge"})[0]}, function(err, res) {
    if (err) throw err;
    console.log("Insertado");
  });
  dbo.collection("comments").insertOne({username: "SuperCoder123",comment: "What's mine is yours!",post:posts.find({'title':"Discovers a software vulnerability"})[0]}, function(err, res) {
    if (err) throw err;
    console.log("Insertado");
  });
  dbo.collection("comments").insertOne({username: "SuperCoder123",comment: "Don't violate the licensing agreement!",post:posts.find({'title':"Shares coding tutorials"})[0]}, function(err, res) {
    if (err) throw err;
    console.log("Insertado");
  });
  dbo.collection("comments").insertOne({username: "TechGuru99",comment: "It still isn't clean",post:posts.find({'title':"Solves a coding challenge"})[0]}, function(err, res) {
    if (err) throw err;
    console.log("Insertado");
  });
  dbo.collection("comments").insertOne({username: "TechGuru99",comment: "Denied your PR because I found a hack",post:posts.find({'title':"Shares coding tutorials"})[0]}, function(err, res) {
    if (err) throw err;
    console.log("Insertado");
  });
  
  //Problema 7 (Consultas)
  dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
   dbo.collection("posts").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("posts").find({username:"SuperCoder123"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("posts").find({username:"TechGuru99"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("comments").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("comments").find({username:"SuperCoder123"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("comments").find({username:"TechGuru99"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  dbo.collection("comments").find({post:posts.find({'title':"Shares coding tutorials"})[0]}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  
  db.close();
});


//Versión shell (no me quedaba claro si lo querías de una forma u otra)
/*
db.series.insertMany([{title: "Stranger Things",genre: ["Drama", "Fantasy", "Horror"],seasons: 4,releaseYear: 2016,rating: 8.8},{title: "Narcos",genre: ["Crime", "Drama", "Thriller"],seasons: 3,releaseYear: 2015,rating: 8.8,synopsis: "Narcos es una serie que narra las vivencias delnarcotraficante Pablo Escobar y los esfuerzos de la DEA por capturarlo.Ambientada en la década de 1980 en Colombia, la serie muestra el auge y la caída del imperio del narcotráfico de Escobar, así comolos peligros y la violencia que rodean el mundo del narcotráfico."},{title: "Money Heist",genre: ["Action", "Crime", "Mystery"],seasons: 5,releaseYear: 2017,rating: 8.3},{title: "The Crown",genre: ["Biography", "Drama", "History"],seasons: 5,releaseYear: 2016,rating: 8.7},{title: "Black Mirror",genre: ["Drama", "Sci-Fi", "Thriller"],seasons: 5,releaseYear: 2011,rating: 8.8},{title: "Breaking Bad",genre: ["Crime", "Drama", "Thriller"],seasons: 5,releaseYear: 2008,rating: 9.5},{title: "Friends",genre: ["Comedy", "Romance"],seasons: 10,releaseYear: 1994,rating: 8.9},{title: "The Witcher",genre: ["Action", "Adventure", "Fantasy"],seasons: 2,releaseYear: 2019,rating: 8.2},{title: "The Mandalorian",genre: ["Action", "Adventure", "Fantasy"],seasons: 3,releaseYear: 2019,rating: 8.8},{title: "Peaky Blinders",genre: ["Crime", "Drama"],seasons: 6,releaseYear: 2013,rating: 8.8},{title: "Sherlock",genre: ["Crime", "Drama", "Mystery"],seasons: 4,releaseYear: 2010,rating: 9.1},{title: "Dark",genre: ["Crime", "Drama", "Mystery", "Sci-Fi", "Thriller"],seasons: 3,releaseYear: 2017,rating: 8.8},{title: "El Internado"},{title: "La casa de Papel"},{title: "Game of Thrones",genre: ["Adventure", "Drama", "Fantasy"],seasons: 8,releaseYear: 2011,rating: 9.3,synopsis: "Game of Thrones es una serie épica que se desarrolla en los Siete Reinos de Westeros. Basada en las novelas de GeorgeR.R. Martin, la serie sigue las luchas de poder entre las casas nobles mientras se preparan para enfrentar la llegada del invierno y laamenaza de los Caminantes Blancos. Intriga, traición y batallas épicas se entrelazan en esta historia que ha cautivado a millones de espectadores en todo el mundo."}]) 
//
db.series.find({genre:"Drama"});
db.series.update({title:/.Narcos./},{$set:{"rating":9.0}})
db.series.find({rating:{$gt:9.0}}).sort({"releaseYear":1})
db.series.find({$and:[{genre:"Thriller"},{synopsis:{$exist:true}}]});
db.series.find({$and:[{rating:{$gt:9.0}},{genre:"Drama"}]})
db.series.find().sort({"title":-1}).limit(1)
db.series.find({$and:[{"releaseYear":{$gte:2017}},{genre:"Mystery"}]});
db.series.find({title:/.T/})
db.series.find().sort({"rating":-1}).limit(1)
db.series.find({synopsis:/.epic./})
db.series.find({$and:[{"releaseYear":{$gt:2015}},{rating:{$gte:8.5}}]});
db.series.find({$or:[{genre:"Fantasy"},{genre:"Sci-Fi"}]})
db.series.find().sort({"seasons":1}).limit(1)
//
db.series.find({synopsis:/.narcotraficante./})
db.series.find({$and:[{synopsis:{$in:["violencia"]}},{synopsis:{$nin:[{"drogas"}]}}]})
db.series.find({synopsis:{$in:["amigos","amistad"]}})
db.series.find({synopsis:/.reino del narcotrafico./})
db.series.find({synopsis:/S./})
db.series.find({$or:[{synopsis:/.aventura./},{synopsis:/.fantasia./}]})
db.series.find({$and:[{synopsis:/.misterio./},{rating:{$gte:8.5}}]});
db.series.find({$and:[{synopsis:/.drama./},{seasons:{$gt:5}}]});
//
db.series.update({title:"Stranger Things"},{$set:{"synopsis":"Stranger Things es una emocionante serie que sigue las aventuras de un grupo de amigos en la pequeña ciudad de Hawkins. Cuando uno de ellos desaparece misteriosamente, descubren un mundo paralelo lleno de criaturas aterradoras y secretos oscuros."}})
db.series.update({title:"Money Heist"},{$set:{"seasons":6}})
db.series.update({title:"Breaking Bad"},{$set:{"rating":9.7}})
db.series.update({title:"Friends"},{$push:{genre:"Romance"}})
db.series.update({title:"Peaky Blinders"},{$set:{"releaseYear":2011}})
db.series.update({title:"Stranger Things"},{$set:{"releaseYear":2015}})
db.series.update({title:"Narcos"},{$inc: {seasons:1}})
db.series.update({title:"Game of thrones"},{$push:{genre:"Action"}})
//
db.series.deleteOne({"title":"Friends"})
db.series.updateMany({"title":"Black Mirror"},{$unset:"rating"})
db.series.deleteMany({rating:{$lt:8.5}})
db.series.updateMany({},{$pull:{genre:"Mystery"}})
db.series.updateOne({"title":"Narcos"},{$unset:"synopsis"})
db.series.deleteMany({$and:[{rating:{$lt:8.5}},{genre:"Drama"}]})
db.series.deleteMany({$or:[{"title":"Black Mirror"},{"title":"The Crown"}]})
db.series.deleteMany({$and:[{"genre":"Crime"},{"releaseYear":2015}]})
db.series.deleteMany({synopsis:{$exist:false}})
db.series.drop()
//
db.series.createIndex({title:1})
db.series.createIndex({$and:[{title:/.Drama./},{languaje:"inglés"}]});
db.series.createIndex({genre:1,rating:1});
db.series.createIndex({title:-1,rating:1});
db.series.getIndexes()
//
db.createcollection("users")
db.users.insertMany([{username: "SuperCoder123",first_name: "Super",last_name: "Coder"},{username: "TechGuru99",full_name: {first: "Tech",last: "Guru"}}])
db.createcollection("posts")
db.posts.insertMany([{username: "SuperCoder123",title: "Solves a coding challenge",body: "Optimizes the algorithm and achieves maximum efficiency."},{username: "SuperCoder123",title: "Shares coding tutorials",body: "Helps aspiring coders with step-by-step guides and examples."},{username: "TechGuru99",title: "Discovers a software vulnerability",body: "Reports it to the developers for prompt fixing."},{username: "TechGuru99",title: "Creates an innovative tech product",body: "Introduces a groundbreaking invention to simplify everyday tasks"}])
db.createcollection("comments")
db.comments.insert({username: "SuperCoder123",comment: "Hope you got a good deal!",post:posts.find({'title':"Solves a coding challenge"})[0]})
db.comments.insert({username: "SuperCoder123",comment: "What's mine is yours!",post:posts.find({'title':"Discovers a software vulnerability"})[0]})
db.comments.insert({username: "SuperCoder123",comment: "Don't violate the licensing agreement!",post:posts.find({'title':"Shares coding tutorials"})[0]})
db.comments.insert({username: "TechGuru99",comment: "It still isn't clean",post:posts.find({'title':"Solves a coding challenge"})[0]})
db.comments.insert({username: "TechGuru99",comment: "Denied your PR because I found a hack",post:posts.find({'title':"Shares coding tutorials"})[0]})
//
db.users.find()
db.posts.find()
db.posts.find({username:"SuperCoder123"})
db.posts.find({username:"TechGuru99"})
db.comments.find()
db.comments.find({username:"SuperCoder123"})
db.comments.find({username:"TechGuru99"})
db.comments.find({post:posts.find({'title':"Shares coding tutorials"})[0]})

*/













