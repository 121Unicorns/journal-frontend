//use npm start

const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 4000;
const jsonParser = express.json();
const fileName = 'entries.json';
const bodyParser = require('body-parser');
var selectId;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);
let size = data.length;

function custom_sort(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
}

app.get('/', (req, res) => {
    res.send(data);
});

app.get('/entries', (req, res) => {
    sorted = data.sort(custom_sort);
    res.send(sorted.reverse());
});

app.get('/size', (req, res) => {
    res.json({size: data[size-1].id});
});

app.post('/selected', jsonParser, (req, res) => {
    selectId = req.body.id;
    //res.json({message: "Selected ID saved"});
    //console.log(selectId);
    res.end();
});

app.get('/selected', jsonParser, (req, res) => {
    var temp = data.filter((item) => item.id == selectId);
    res.json(temp);
    res.end();
});

// This is a RESTful POST web service
app.post('/entries', jsonParser, (req, res) => {
    data.push(req.body);
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    res.json({message: "Journal Entry successfully added!"});
    res.end();
});

app.delete("/delete", (req, res) =>{
    var temp = data.filter((item) => item.id != req.body.id);
    fs.writeFileSync(fileName, JSON.stringify(temp, null, 2));
    res.json({message: "Journal entry successfully deleted!"});
    res.end();
});

//EDIT PAIR
app.patch("/edit", (req, res)=> {
    for (var i = 0; i< size; i++){
        if (selectId === data[i].id){
            data[i].title = req.body.title;
            data[i].text = req.body.text;
            data[i].date = req.body.date;
        }
    }
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    res.json({message: "Journal entry successfully updated!"});
    res.end();
})

app.listen(port);
console.log(`Server listening on port ${port}`);
