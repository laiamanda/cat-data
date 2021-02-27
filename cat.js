const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament:String
});

var Cat = mongoose.model("Cat", catSchema);
//adding a cat to the mongodb
/*
var george = new Cat({
	name: "Mrs. Norris",
	age: 7,
	temperament: "evil"
});
george.save(function(err, cat){
	if (err){
		console.log("Something went wrong");
	}
	else{
		console.log("Saved Cat");
		console.log(cat);
	}
});
*/

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Bland"
}, function(err,cat){
	if(err){
		console.log(err);
	}
	else{
		console.log(cat);
	}
});
//retrieve all cats from the db and console.log each one

Cat.find({},function(err,cats){
	if (err){
		console.log("OH NO ERROR");
		console.log(cats);
	}
	else{
		console.log("All the cats...");
		console.log(cats);
	}
});
