import { Tweeter } from './model.js';
import { renderPosts } from './render.js';

const tweeter = new Tweeter();

// הפניה לאלמנטים
const postInput = document.getElementById("post-input");
const twitButton = document.getElementById("twit-button");
const postsContainer = document.getElementById("posts");

// מאזין לכפתור הוספת פוסט
document.getElementById("twit-button").addEventListener("click", () => {
  const text = document.getElementById("post-input").value.trim();
  if (text) {
    tweeter.addPost(text);
    document.getElementById("post-input").value = "";
    updateView();
  }
});

// מאזין לכל הקליקים בפוסטים (event delegation)
document.getElementById("posts").addEventListener("click", (event) => {
  const target = event.target;

  // מחיקת פוסט
  if (target.classList.contains("btn-delete-post")) {
    const postId = target.getAttribute("data-post");
    tweeter.removePost(postId);
    updateView();
  }

  // הוספת תגובה
  if (target.classList.contains("comment-button")) {
    const postId = target.getAttribute("data-post");
    const input = target.previousElementSibling;
    const commentText = input.value.trim();
    if (commentText) {
      tweeter.addComment(postId, commentText);
      updateView();
    }
  }

  // מחיקת תגובה
  if (target.classList.contains("btn-delete-comment")) {
    const postId = target.getAttribute("data-post");
    const commentId = target.getAttribute("data-comment");
    tweeter.removeComment(postId, commentId);
    updateView();
  }
});

// רענון התצוגה
function updateView() {
  renderPosts(tweeter);
}
updateView();
