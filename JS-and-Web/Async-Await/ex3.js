async function getDashboard() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then( r=> r.json()),
      fetch('https://jsonplaceholder.typicode.com/posts').then( r=> r.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then( r=> r.json())
    ]);



    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;
    const avgPostsPerUser = +(totalPosts / totalUsers).toFixed(2);
    const avgCommentsPerPost = +(totalComments / totalPosts).toFixed(2);

    const postCounts = {};
    const commentCounts = {};

    posts.forEach(post => {
      postCounts[post.userId] = (postCounts[post.userId] || 0) + 1;
    });

    comments.forEach(comment => {
      const post = posts.find(p => p.id === comment.postId);
      if (post) {
        commentCounts[post.userId] = (commentCounts[post.userId] || 0) + 1;
      }
    });

    const topUsers = users
      .map(user => ({
        name: user.name,
        postCount: postCounts[user.id] || 0,
        commentCount: commentCounts[user.id] || 0
      }))
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    const recentPosts = posts
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return {
      summary: {
        totalUsers,
        totalPosts,
        totalComments,
        avgPostsPerUser,
        avgCommentsPerPost
      },
      topUsers,
      recentPosts
    };

  } catch (error) {
    console.error('Error building dashboard:', error.message);
    return null;
  }
}

(async () => {
  const dashboard = await getDashboard();
  console.log(JSON.stringify(dashboard, null, 2));
})();
