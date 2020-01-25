const mongoose = require('mongoose');
const Schema = mongoose.Schema; //"puxar receita de bolo"

var mention = {  
    friend:{
        type:String, //campo tipo texto
        required: true, //obrigatório no banco de dados
        trim: true //método do MongoDb para remover espaços em branco no começo e no final
    },
    mention:{
        type: String,
        required: true,
        trim: true
    }
};

const schema = new Schema(mention);//"fazer o bolo"
//linha 2 extraiu a função Schema do mongoose, que agora recebe o objeto mention

module.exports = mongoose.model('Mentions',schema);