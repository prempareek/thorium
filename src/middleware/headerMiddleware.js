const headerValidation = function (req, res, next){
    let data = req.headers
    //console.log(data)
  
  
   if(data.hasOwnProperty("isfreeappuser") === false){
       res.send({error : "header is missing its cmplsry" })
   }else {
       next()
   }

}

module.exports.headerValidation = headerValidation