export function renderPosts(tweeterInstance) {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  const posts = tweeterInstance.getPosts();

  posts.forEach(post => {
    const postEl = document.createElement("div");
    postEl.classList.add("post-card");
    postEl.setAttribute("data-id", post.id);

    postEl.innerHTML = `
      <div class="post-text"><strong>${post.text}</strong></div>

      <div class="comments-list">
        ${post.comments.map(comment => `
          <div class="comment-item" data-id="${comment.id}">
            <button class="btn-delete-comment" data-post="${post.id}" data-comment="${comment.id}">x</button>
            <span class="comment-text">${comment.text}</span>
          </div>
        `).join("")}
      </div>

      <div class="comment-form">
        <input type="text" placeholder="Got something to say?" class="comment-input" />
        <button class="comment-button" data-post="${post.id}">Comment</button>
      </div>

      <button class="btn-delete-post" data-post="${post.id}">Delete Post</button>
    `;

    postsContainer.appendChild(postEl);
  });
}

  

