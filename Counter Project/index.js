class Counter {
    count = 0

    increment() {
        return this.count = this.count + 1
    }

    decrement() {
        return this.count = this.count - 1
    }
}

let counter = new Counter

let countElement = document.querySelector(".count")

const incrementElements = document.getElementById("increment")
const decrementElements = document.getElementById("decrement")

incrementElements.addEventListener("click", () => {
    let count = counter.increment()
    countElement.textContent = count
})

decrementElements.addEventListener("click", () => {
    let count = counter.decrement()
    countElement.textContent = count
})
