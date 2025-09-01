let count = 0;

function requestCount (req,res,next){
    count++;
    req.requestCount = count;
    next();
}

module.exports = { requestCount };