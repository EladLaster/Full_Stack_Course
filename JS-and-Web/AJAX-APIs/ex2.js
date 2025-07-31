//Exercise 2
const myBooks = document.getElementById("books");
const inputqueryType = document.getElementById("queryType");
const inputqueryValue = document.getElementById("queryValue");
const button = document.getElementById("search-btn");

button.addEventListener("click", () => {
  const type = inputqueryType.value.trim().toLowerCase();
  const value = inputqueryValue.value.trim();

  if (!type || !value) {
    alert("Please enter both query type and value.");
    return;
  }

  fetchBook(type, value);
  inputqueryType.value = "";
  inputqueryValue.value = "";
});

[inputqueryType, inputqueryValue].forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      button.click();
    }
  });
});

function fetchBook(queryType, queryValue) {
  const query = `${queryType}:${queryValue}`;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

  myBooks.innerHTML = "";

  axios
    .get(url)
    .then((response) => {
      const data = response.data;

      if (!data.items || data.totalItems === 0) {
        myBooks.innerHTML = "<p>No books found.</p>";
        return;
      }

      myBooks.innerHTML = "";

      const book = data.items[0].volumeInfo;
      const bookDiv = document.createElement("div");
      bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author(s):</strong> ${
              book.authors?.join(", ") || "Unknown"
            }</p>
            <p><strong>Description:</strong> ${
              book.description || "No description available."
            }</p>
            `;

      myBooks.appendChild(bookDiv);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      myBooks.innerHTML = `<p style="color:red;">Error fetching data: ${err.message}</p>`;
    });
}

// fetch("isbn", 9789814561778) - From Third World to First: The Singapore Story
// fetch("title", "How to Win Friends and Influence People") - book by Dale Carnegie
