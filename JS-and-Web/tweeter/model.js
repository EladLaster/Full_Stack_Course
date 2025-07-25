export class Tweeter {
    #posts =[
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't worry second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]

    postIdCounter =3;
    commentIdCounter =7;

    getPosts() {
    // return JSON.stringify(this.#posts, null, 2);
    return this.#posts;
    }

    addPost(text){
        const post = {
            text : '' + text,
            id : 'p' + this.postIdCounter++,
            comments : []
        }
        this.#posts.push(post);
    }
    removePost(postID) {
        for (let i = 0; i < this.#posts.length; i++) {
            if (this.#posts[i].id === postID) {
                this.#posts.splice(i, 1);
                break;
            }
        }
    }
    addComment(postID, text){
        for (let i = 0; i < this.#posts.length; i++) {
            if (this.#posts[i].id === postID) {
                const comment = {
                    id: "c" + this.commentIdCounter++,
                    text: text
                };
                this.#posts[i].comments.push(comment);
                    return;
            }
        }
    }
    removeComment(postID, commentID){
        for (let i = 0; i < this.#posts.length; i++) {
            if (this.#posts[i].id === postID) {
                for(let j=0;j<this.#posts[i].comments.length;j++){
                    if(this.#posts[i].comments[j].id === commentID){
                        this.#posts[i].comments.splice(j,1);
                        return;
                    }
                }
            }
        }
    }
}

// const tweeter = new Tweeter();

// // Test adding a post
// tweeter.addPost("This is my own post!");
// console.log(tweeter.getPosts());
// // Should add: {text: "This is my own post!", id: "p3", comments: []}

// // Test removing a post
// tweeter.removePost("p1");
// console.log(tweeter.getPosts());
// // Should only have two posts left

// // Test adding comments
// tweeter.addComment("p3", "Damn straight it is!");
// tweeter.addComment("p2", "Second the best!");
// console.log(tweeter.getPosts());

// // Test removing comments
// tweeter.removeComment("p2", "c6");
// console.log(tweeter.getPosts());
