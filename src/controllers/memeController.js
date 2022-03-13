const axios = require("axios")


let memepost = async function(req, res) {

    try {
        let memesId = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password



        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${memesId}&text0=${text0}&text1${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        res.status(400).send({ data: result.data })

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}


module.exports.memepost = memepost