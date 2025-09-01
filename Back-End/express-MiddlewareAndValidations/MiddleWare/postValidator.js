const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const postSchema = require('../Schema/postSchema');

const ajv = new Ajv();
addFormats(ajv);

const postValidation = ajv.compile(postSchema)

function validPost (req,res,next) {
    const valid = postValidation(req.body);
    if(valid){
        next();
    }
    else{
        res.status(400).json({errors:postValidation.errors});
    }
}

module.exports = {validPost};

