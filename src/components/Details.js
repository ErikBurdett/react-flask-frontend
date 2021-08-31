import React from 'react'
import {List, Header, Form, Button} from "semantic-ui-react"

export const Details = ({articles})=> {

    const data = articles.route.params.data;

    const deleteData = (data)=>{
        fetch(`/delete/${data.id}/`, {
            method: 'DELETE',
            headers: {
                'content-type':'application/json'
            }
        })
        .then(console.log(data))
        .catch(function(error){
            console.log("error with fetch:" + error.message);
            //throws error
            throw error;

        })
    }
    return (
        <List>
        {articles.map(article =>{
            return(
            <List.Item key={article.title}>
                <Header>{article.title}</Header>
                <Form>
            <Form.Field>
                <Button
                onClick={()=>deleteData(data)
                }>
                Delte Article
                </Button>

            </Form.Field>
            </Form>
            </List.Item>
                )
        })}
        </List>
    )
}

export default Details;
