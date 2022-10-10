const btn = document.querySelector('button')
const body = document.querySelector('body')
const heading = document.querySelector('h1')

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

changeBackground()

btn.addEventListener("click", changeBackground)

function changeBackground() {
    let hexValue = "#"

    for (let index = 0; index < 6; index++) {
        hexValue += colors[Math.floor(Math.random() * colors.length)]
    }

    body.style.backgroundColor = hexValue
    heading.textContent = hexValue
}