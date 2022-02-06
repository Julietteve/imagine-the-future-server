const mongoose = require('mongoose');

const schemaArticle = new mongoose.Schema({
  timestamp: { 
    type: String,
    require: true,
    max:100
},
    headline: { 
    type: String,
    require:true
},
    subtitle: { 
    type: String, 
},
    quote: { 
    type: String, 
},
    body: { 
    type: String, 
    require: true
},
    likes:{
    type:Number
}

})

const daoArticle = mongoose.model('Article', schemaArticle);

module.exports ={ daoArticle };