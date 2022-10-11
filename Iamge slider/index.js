const imagesName = ['img-1', 'img-2', 'img-3', 'img-4', 'img-5', 'img-6', 'img-7']

const btns = document.querySelectorAll("button")
const imageContainer = document.querySelector(".img-container")

let counter = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        if (btn.classList.contains("leftBtn")) {
            counter--
            if (counter < 0) {
                counter = imagesName.length - 1
            }
            imageContainer.style.backgroundImage = `url("./img/${imagesName[counter]}.jpg")`
        }

        if (btn.classList.contains("rightBtn")) {
            counter++
            if (counter > imagesName.length - 1) {
                counter = 0
            }
            imageContainer.style.backgroundImage = `url("./img/${imagesName[counter]}.jpg")`
        }
    })
})