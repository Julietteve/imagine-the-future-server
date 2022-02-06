const {daoArticle} = require('./dao/article')

class ArticleDB {
    constructor(){

    }

    async add (data) {
      
        const article = {
          timestamp: Date.now(),
          headline: data.headline,
          subtitle: data.subtitle,
          quote: data.code,
          body: data.body,
        }

        try{
          const newArticle =  await daoArticle.create(article)
          return newArticle
        }
        catch(err){
          console.log(err)
        }
  
    }

    async get() {
      try{
        let articles = await daoArticle.find()
        return articles
      }
      catch(err){
        console.log(err)
      }
    }
  
    async getById(id) {
      try{
        let article = await daoArticle.findById(id)
        console.log(id)
        console.log(article)
        return article
      }
      catch(err){
        console.log(err)
      }
     
    }
}

module.exports = ArticleDB