const express = require('express');
const path = require('path');
const port =  8000;

const app = process.env.PORT ||   express();





app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('js'));
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    return res.render('index');
})
     
app.listen(port,function(err){
    if(err){
        console.log('error in running server ',err  );
    }
    console.log('yup my server is running on port',port);


});