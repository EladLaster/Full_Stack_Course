const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

const button = document.getElementById("myBtn");
const inputName = document.getElementById("inputName");
const inputText = document.getElementById("inputText");
const postsContainer = document.getElementById("posts-container");
const realPost = document.getElementById("real-post");


function render() {
  postsContainer.innerHTML = "";
  posts.forEach((post, index) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = post.name + ": " + post.text;

    newDiv.addEventListener("click", () => {
      posts.splice(index, 1);
      render();
    });
    postsContainer.appendChild(newDiv);
  });
}


button.addEventListener("click", () => {
    const newPost = {
        name: inputName.value,
        text: inputText.value
    };
    posts.push(newPost);
    render();
})
render();