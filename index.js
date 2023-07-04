// console.log("pratham");
const express = require('express');
const app = express();
const port = 8000;
app.listen(port,(err)=>{
    if(err){
        console.log(`There is an error while running the server:${err}`)
    }
    else{
        console.log(`Server is running on the port ${port}`);
    }
});

