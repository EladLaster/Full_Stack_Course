const postSchema = { 
    type: 'object',
    properties: {
        id : {type:'number'},
        title :{ type : 'string' ,minLength: 5,maxLength: 100},
        content : {type : 'string' ,minLength: 10,maxLength: 1000},
        tags : {type : 'array', items: { type: 'string' }}
    },
    required :['title', 'content'],
    additionalProperties: false 
}

module.exports = postSchema;