export default class APIService{
    static UpdateArticle(id, body){
        return fetch(`https://flaskreact-native-test.herokuapp.com/update/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertedArticle(body){
        return fetch('https://flaskreact-native-test.herokuapp.com/add', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteArticle(id){
        return fetch(`https://flaskreact-native-test.herokuapp.com/delete/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
        })
    }
}

