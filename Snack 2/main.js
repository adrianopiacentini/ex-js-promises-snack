const lanciaDado = () => {
    const promise = new Promise((resolve, reject) => {
        console.log('Sto lanciando il dado...')
        setTimeout(() => {
            const diceInt = Math.floor(Math.random() * 6) + 1
            const stuckInt = Math.floor(Math.random() * 5) + 1
            if(stuckInt === 3) {
                reject('Il dado si è inceppato, ritenta!')
            } else {
                resolve(diceInt)
            }
        }, 3000)
    })

    return promise
}

lanciaDado()
    .then(result => console.log(`Il risultato del dado è: ${result}`))
    .catch(err => console.error(err))