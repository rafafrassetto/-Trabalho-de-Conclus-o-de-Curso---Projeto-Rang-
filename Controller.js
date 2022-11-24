const express = require ('express');
const bodyParser= require ('body-parser');
const models = require('./models');

const cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let port = process.env.PORT|| 3000;
const user = models.User
//routes
app.post('/create',async(req,res)=>{
    let reqs = await user.create({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha,
        createdAt:new Date(),
        updatedAt:new Date()


    });
    if(reqs){
        res.send(JSON.stringify('Cadastrado com sucesso!'));
    }

})
app.post('/Login',async(req,res)=>{
    let response = await user.findOne({
        where: {email: req.body.email,senha: req.body.senha }
    });
    if (response == null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
        
    }
});




app.listen(port,(req,res)=>{
    console.log('servidor top')
})