const getPostTitle = id => {
    const promise = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(resp => resp.json())
        .then(obj => resolve(`Titolo: ${obj.title}`))
        .catch(err => reject(err))
    })
    return promise
}

getPostTitle(1)
.then(obj => console.log(obj))
.catch (err => console.log(err))

