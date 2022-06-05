const fs = require("fs");

var obj = [];
const junk = { price: 2, timestamp: "2022-01-01T00:00:00.000Z" };

fs.readFile("data.json", "utf8", function readFileCallback(err, data) {
   if (err) {
      console.log(err);
   } else {
      obj = JSON.parse(data); //now it an object

      obj.push(junk); //add some data
      json = JSON.stringify(obj, null, 2); //convert it back to json
      fs.writeFile("data.json", json, "utf8", (error) => {
         if (error) {
            console.log("error " + error);
         } else {
            console.log("success");
         }
      }); // write it back
   }
});