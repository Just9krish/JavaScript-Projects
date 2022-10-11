const btn = document.querySelector(".btn")
const lastSubmittedMsg = document.getElementById("submitted-msg")

btn.addEventListener("click", passMessage)

function passMessage() {
    const inputValue = document.querySelector(".user-input").value

    if (localStorage.getItem('msg') === "") {
        document.getElementById("delivered").textContent = "Enter message to be delivered!"

        lastSubmittedMsg.textContent = previousMsg

        // lastSubmittedMsg.textContent = inputValue
    } else {
        if (inputValue === "") {
            document.getElementById("delivered").textContent = 'Last Message Delivered'
            lastSubmittedMsg.textContent = localStorage.getItem('msg')
        } else {
            lastSubmittedMsg.textContent = inputValue
            localStorage.setItem('msg', inputValue)
        }
    }
}

passMessage()