// Starter code structure:
async function getUserWithPosts(userId) {
    try{
        const getUserApi = await fetch('https://jsonplaceholder.typicode.com/users/' + userId);
        if (!getUserApi.ok) 
            throw new Error('User not found');
        const user = await getUserApi.json();
    
        const getPostApi = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
        if (!getPostApi.ok) 
            throw new Error('Failed to fetch posts');
        const posts = await getPostApi.json();

    const combined = {
      ...user,
      posts: posts
    };

    console.log(`User ${user.name} has ${posts.length} posts.`);
    return combined;
    }
        catch (error) {
    console.error('Error fetching user or posts:', error.message);
    return null;
  }

  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
}

getUserWithPosts(4);