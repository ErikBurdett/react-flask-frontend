import React from 'react'
import APIService from './APIService'

function ArticleList(props) {

    const editArticle = article =>{
        props.editArticle(article)
    }

    const deleteArticle = (article) =>{
        APIService.DeleteArticle(article.id)
        .then(()=>props.deleteArticle(article))
    }
    return (
        <div
        data-testid = "articles"
        >
        {props.articles && props.articles.map(article =>{
          return (
            <div
            data-testid = "articles"
            key ={article.id}>
              <h2>Test - {article.title}</h2>
              <p
              >{article.body}</p>
              <p>{article.date}</p>
              <div 
              className="row"
              >
                  <div className = "col-md-1"
                  >
                      <button
                      name = 'update'
                      className = "btn btn-primary"
                      onClick = {()=> editArticle(article)}
                      >
                        Update
                      </button>
                  </div>
                  <div className = "col">
                      <button
                      className = "btn btn-danger"
                      onClick={()=> deleteArticle(article)}>
                        delete
                      </button>
                  </div>
            </div>
            <hr/>
            </div>
          )
        })}
        </div>
    )
}

export default ArticleList
