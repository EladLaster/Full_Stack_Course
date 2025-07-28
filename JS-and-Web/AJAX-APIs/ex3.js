//Exercise 3
const button = document.getElementById("search-btn");
const inputType = document.getElementById("queryType");
const inputValue = document.getElementById("queryValue");
const myBooks = document.getElementById("books");

button.addEventListener("click", () => {
  const queryType = inputType.value.trim().toLowerCase();
  const queryValue = inputValue.value.trim();

  if (!queryType || !queryValue) {
    alert("Please enter both queryType and queryValue");
    return;
  }

  fetchBooks(queryType, queryValue);
  inputType.value ='';
  inputValue.value ='';
});

[inputType, inputValue].forEach(input => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      button.click();
    }
  });
});

function fetchBooks(queryType, queryValue) {
  const query = `${queryType}:${queryValue}`;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

  myBooks.innerHTML = "";

  axios.get(url)
    .then(response => {
      const data = response.data;

      if (!data.items || data.items.length === 0) {
        myBooks.innerHTML = "<p>No books found.</p>";
        return;
      }

      data.items.forEach(item => {
        const book = item.volumeInfo;
        const title = book.title || "No title";
        const authors = book.authors ? book.authors.join(", ") : "Unknown";

        let isbn = "No ISBN";
        if (book.industryIdentifiers) {
          const isbn13 = book.industryIdentifiers.find(id => id.type === "ISBN_13");
          if (isbn13) isbn = isbn13.identifier;
        }

        const bookDiv = document.createElement("div");
        bookDiv.style.border = "1px solid #ccc";
        bookDiv.style.padding = "10px";
        bookDiv.style.marginBottom = "10px";
        bookDiv.style.borderRadius = "5px";
        bookDiv.innerHTML = `
          <h3>${title}</h3>
          <p><strong>Author(s):</strong> ${authors}</p>
          <p><strong>ISBN:</strong> ${isbn}</p>
        `;

        myBooks.appendChild(bookDiv);
      });
    })
    .catch(err => {
      console.error("Error fetching data:", err);
      myBooks.innerHTML = `<p style="color:red;">Error fetching data: ${err.message}</p>`;
    });
}

// fetch("isbn", 9789814561778) - From Third World to First: The Singapore Story
// fetch("title", "How to Win Friends and Influence People") - book by Dale Carnegie