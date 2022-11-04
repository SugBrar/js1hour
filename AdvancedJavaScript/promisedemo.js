const promise = new Promise((resolve,reject) =>{
    setTimeout(() => { resolve()} , 5000) // when succcesful
    setTimeout(() => { reject()} , 5000) // when failed

})

promise.then(onFullfillment)
promise.catch(onRejection)

const onFullfillment= (result) => {
    console.log(result)
    console.log('Set up table')
}

const onRejection = (error) => {
    console.log(error)
    console.log('Start cooking pasta')

}