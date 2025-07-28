//Exercise 1
const myBooks = document.getElementById("books");
const input = document.getElementById("isbn-input");
const button = document.getElementById("search-btn");

button.addEventListener("click", () => {
  const isbn = input.value.trim();
  if (!isbn) {
    alert("Please enter isbn.");
    return;
  }
    fetchBookInfo(isbn);
    input.value = "";
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});


function fetchBookInfo(isbn) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  axios.get(url)
  .then(response => {
    const data = response.data;

    if (data.totalItems === 0)
      console.log("No book found for ISBN:", isbn);
    else {
      const book = data.items[0].volumeInfo;
      
      myBooks.innerHTML = "";
      
      const bookDiv = document.createElement("div");
      bookDiv.innerHTML = 
        `<h3>${book.title}</h3>
         <p><strong>Published:</strong> ${book.publishedDate || "Unknown"}</p>
         <p><strong>Authors:</strong> ${book.authors?.join(", ") || "Unknown"}</p>
         <p><strong>Description:</strong> ${book.description || "No description available."}</p>
         <hr>`;
         
      myBooks.appendChild(bookDiv);
    }
  })
  .catch(error => {
    console.error("Axios error:", error);
    myBooks.innerHTML = "An error occurred while fetching book data.";
  });

}


// fetchBookInfo("9780575087057"); // Name of the Wind
// fetchBookInfo("9782806269171"); // The Little Prince: Book Analysis
// fetchBookInfo("1440633908");    // Of Mice and Men
// fetchBookInfo("9781945048470"); // The Alchemist
// fetchBookInfo("9780307417138"); // Hitchhiker's Guide to the Galaxy