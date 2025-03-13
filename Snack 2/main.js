const lanciaDado = () => {
    const promise = new Promise((resolve, reject) => {
        console.log('Sto lanciando il dado...')
        setTimeout(() => {
            const diceInt = Math.floor(Math.random() * 6) + 1
            const stuckInt = Math.floor(Math.random() * 5) + 1
            if(stuckInt === 3) {
                reject('Il dado si è inceppato, ritenta!')
            } else {
                console.log(`E' uscito il numero ${diceInt}!`)
            }
        }, 3000)
    })

    return promise
}

lanciaDado()