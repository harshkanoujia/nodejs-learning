function log(res,req,next){
    console.log('Logging...'); //sent req.body
    next();
}
module.exports = log;