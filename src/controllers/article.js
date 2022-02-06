const ArticleDB = require('../models/article')

const article = new ArticleDB



const postArticle = async (req,res) => {
    
    const data =  req.body
    try{
        const response = await article.add(data);
        res.status(200).json({
            data: `Article ${response.id} created`
        });
    }
    catch(err){
        console.log(err)
    }
}

const getArticle  = async (req, res) => {

    const { id } = req.params;

    if(id != null){
        const currentArticle = await article.getById(id)
            if (currentArticle) {
                return res.json(currentArticle)
            }
            else{
                res.status(404).json({
                  error: "Article not found",
                });
            }
        
    }
    else{
        const articles = await article.get()
        if (!articles) {
          return res.status(404).json({
            error: "No uploaded articles",
          });
        }
        res.json(articles);
    }

}

module.exports = {
    postArticle,
    getArticle
}