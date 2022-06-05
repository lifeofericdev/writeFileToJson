const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());


app.use(express.static('./public'));


app.post('/api', (req, res) => {
    res.send('post success');
    // res.render('index', {incoming: ''})
    console.log(req.body)
    
})






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})