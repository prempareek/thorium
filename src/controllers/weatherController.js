const axios = require("axios")


let getWeather = async function(req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let objArray = []
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather/?q=${cities[i]}&appid=67f24de447330eabba134ed24a517c89`
            }
            let result = await axios(options);
            obj.temp = result.data.main.temp
            objArray.push(obj)

        }
        let sorted = objArray.sort(function(a, b) { return a.temp - b.temp })
        res.send({ status: true, data: sorted })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}


module.exports.getWeather = getWeather