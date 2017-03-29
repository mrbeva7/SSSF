/**
 * Created by mrbeva on 3/28/17.
 */
const bodyParser = require ('body-parser');
const express = require ('express');
const mongoose = require('mongoose');
const app = express()
mongoose.Promise = global.Promise; //ES6 Promise

mongoose.connect('mongodb://localhost:27017/test').then(() => {
    console.log('Connected successfully.');
    app.listen(3000)
}, err => {
    console.log('Connection to db failed: ' + err);
});

app.get('/', (req, res)=> {
    res.send("connected!")
})


const Schema = mongoose.Schema;

const cat = new Schema({
    name: String,
    gender: {type: String, enum:['male', 'female']},
    age: Number,
    color: String,
    weight: Number,
});

const cat = mongoose.model('cat', catSchema);

// same as 'insert'
cat.create({ hidden: false }).then(post => {
    console.log(post.name);
});

cat.find().exec().then((cat) => {
    console.log(`Got ${cat.gender} cat`);
});

cat.find({ hidden: false }).where('bDate').gt().exec().then(data => {
    console.log(data);
});

