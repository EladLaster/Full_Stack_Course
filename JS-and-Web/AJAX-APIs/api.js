const mybtn = document.getElementById("myBtn");
const myPhoto = document.getElementById("photo")

mybtn.addEventListener("click", () => {
    console.log("dog photo: ");
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
    if (response.ok) {
      console.log("success");
      return response.json();
    } else {
      console.log("error");
      throw new Error("Network response was not ok");
    }
  })
    .then(data => {
    myPhoto.src = data.message;
})
    .catch(err => console.error("error is :" + err));
})