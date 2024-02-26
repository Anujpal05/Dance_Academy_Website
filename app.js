const express = require("express");
const path = require("path");
const fs = require("fs");
const { default: mongoose } = require("mongoose");
const app = express();
port = 80;

app.use('/static', express.static("static"));
app.use(express.urlencoded());

//set the template engine as pug
app.set("view engine", "pug");

//set the views directory
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    params = {};
    res.status(200).render("home.pug", params);
});

app.get("/service", (req, res) => {
    res.status(200).render("service.pug");
})

app.get("/contact", (req, res) => {
    res.status(200).render("contact.pug");
})

app.get("/submit",(req,res)=>{
    res.status(200).render("submit.pug");
});

mongoose.connect('mongodb://localhost/ajdata', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log("Mongodb connected") })
.catch(err => { console.error("Mongodb connection error : " + err) });

const contactSchema = new mongoose.Schema({
    name: String,
    Sgender: String,
    age: Number,
    phone: Number,
    email: String
});

const contactModel = mongoose.model("Detail", contactSchema);

app.post("/submit", async(req, res) => {
    try {
        const data = new contactModel({
            name: req.body.name,
            Sgender: req.body.Sgender,
            age: req.body.age,
            phone: req.body.phone,
            email: req.body.email
        });

        await data.save();

        console.log(req.body);
    } catch (err) {
        console.error("Error Occurs :" + err);
        res.status(500).send('An error occurred while processing your request.');
    }
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

