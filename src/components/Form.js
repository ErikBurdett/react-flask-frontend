import React, {useState, useEffect} from 'react'
import APIService from './APIService'

function Form(props) {

    const[title, setTitle] = useState(props.article.title)
    const[body, setBody] = useState(props.article.body)

    useEffect(() => {
        setTitle(props.article.title)
        setBody(props.article.body)
    }, [props.article])

    const updateArticle = ()=> {
        APIService.UpdateArticle(props.article.id, {title, body})
        .then(resp => props.updatedData(resp))
        .catch(error => console.log(error))

    }

    const insertedArticle = ()=>{
        APIService.InsertedArticle({title, body})
        .then(resp => props.insertedArticle(resp))
        .catch(error => console.log(error))
    }

    return (
        <div >
            {props.article ? (
                <div
                test-dataid ="input"
                className = "mb-3">
                    <label htmlFor = "title" className = "form-label">
                    Title</label>
                    <input type="text" 
                    className = "form-control"
                    value = {title}
                    placeholder = "Please Enter Title"
                    onChange = {(e=> setTitle(e.target.value))}
                    />
                    <label htmlFor = "body" className = "form-label">
                    Article</label>
                    <textarea
                    type="textarea"
                    test-dataid = "form1"
                    row = "5"
                    className = "form-control"
                    value = {body}
                    placeholder ="Please provide a description"
                    onChange = {(e=> setBody(e.target.value))}
                    />
                    
                        {
                            props.article.id ?  <button
                            className="btn btn-success mt-3"
                            onClick = {updateArticle}>Update</button>
                            :
                            <button
                            data-testid="form-submit"
                            onClick = {insertedArticle} className = "btn btn-success mt-3">Submit</button>
                        }

                </div>
            ):null};
        </div>
    )
}

export default Form
