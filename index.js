const express = require('express');
const app = express();
const fs = require('fs');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.sendFile('index.hmtl', {root: __dirname})
})

//outgoing message/data
var outgoingMessage = [];

app.post('/create-data', (req, res) => {
    const {company, employees} = req.body
    const junk = { company: company, employees: employees };
    res.send(company)
    console.log(company);

    //sending to JSON file
fs.readFile("data.json", "utf8", function readFileCallback(err, data) {
   if (err) {
      console.log(err);
   } else {
      outboundMessage = JSON.parse(data); //now it an outboundMessageect

      outboundMessage.push(junk); //add some data
      json = JSON.stringify(outboundMessage, null, 2); //convert it back to json
      fs.writeFile("data.json", json, "utf8", (error) => {
         if (error) {
            console.log("error " + error);
         } else {
            console.log("success");
         }
      }); 
   }
});
})






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})