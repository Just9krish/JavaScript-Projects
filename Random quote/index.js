const btn = document.getElementById('btn')
const quotePara = document.getElementById('quote')
const authorName = document.getElementById('author')

generateQuote()

btn.addEventListener("click", generateQuote)

function generateQuote() {
    fetchQuote().then(quote => {
        console.log(quotePara)
        quotePara.textContent = quote.text;
        authorName.textContent = quote.author;
    })
}

async function fetchQuote() {
    const response = await fetch("https://type.fit/api/quotes")
    const data = await response.json()
    const randomIndex = Math.floor(Math.random() * data.length)
    return data[randomIndex]
}


