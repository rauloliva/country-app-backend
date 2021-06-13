const axios = require('./axios')

exports.request = uri => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(uri)
            const data = response.data
            resolve(data)    
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}