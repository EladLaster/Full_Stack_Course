import { Tweeter } from './model.js';
import { renderPosts } from './render.js';

const tweeter = new Tweeter();

const postInput = document.getElementById("post-input");
const twitButton = document.getElementById("twit-button");



function addEventListeners() {
    const deletePostButtons = document.querySelectorAll(".btn-delete-post");
    const commentButtons = document.querySelectorAll(".comment-button");
    const deleteCommentButtons = document.querySelectorAll(".btn-delete-comment");


  deletePostButtons.forEach(button => {
    button.addEventListener("click", function () {
      const postID = this.dataset.post;
      tweeter.removePost(postID);
      refresh();
    });
  });

  commentButtons.forEach(button => {
    button.addEventListener("click", function () {
      const postID = this.dataset.post;
      const input = this.previousElementSibling;
      if (input.value.trim()) {
        tweeter.addComment(postID, input.value);
        refresh();
      }
    });
  });

  deleteCommentButtons.forEach(button => {
    button.addEventListener("click", function () {
      const postID = this.dataset.post;
      const commentID = this.dataset.comment;
      tweeter.removeComment(postID, commentID);
      refresh();
    });
  });
}

function refresh() {
  renderPosts(tweeter);
  addEventListeners();
}

twitButton.addEventListener("click", () => {
  const text = postInput.value.trim();
  if (text) {
    tweeter.addPost(text);
    postInput.value = "";
    refresh();
  }
});

refresh();

// const tweeter = Tweeter();
// const renderer = Renderer();

// // This should render the initial dummy data
// renderer.renderPosts(tweeter.getPosts());

