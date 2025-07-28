//Sequential (slower)
async function getDataSequential(){
    const user = await fetch ('/api/user/1').then(r => r.json());
    const posts = await fetch('/api/posts/1').then(r => r.json());
    const comments = await fetch('/api/comments/1').then(r => r.json());
    return {user , posts, comments};
}

//Parallel (faster)
async function getDataParallel(){
    const [user,posts,comments] = await Promise.all([
    fetch ('/api/user/1').then(r => r.json()),
    fetch('/api/posts/1').then(r => r.json()),
    fetch('/api/comments/1').then(r => r.json())
    ]);
    return {user , posts, comments};
}