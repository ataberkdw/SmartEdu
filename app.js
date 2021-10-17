const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('INDEX SAYFASI'); 
})

const port = 3000;

app.listen(3000,()=>{
    console.log(`Sunucu ${port} portunda baslatildi`);
})