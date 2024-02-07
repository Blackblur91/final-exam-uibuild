console.log(books)

const rootElement = document.querySelector("#root")

books.forEach((book, index) => rootElement.insertAdjacentHTML("beforeend", `
    <div class="book">
        <p>${book.sub}</p>
        <h2>${book.title}</h2>
        <div class="text">${book.text}</div>
        <div class="number">${index + 1}</div>
        
        <button class="button">Read more</button>
    </div>
`))
