const main = document.querySelector(".main")
const result = document.querySelector(".result")
const submitButton = document.getElementsByClassName("submit")[0]
const score = document.getElementsByClassName("score")[0]
const rates = document.querySelectorAll(".btn")
let x

submitButton.addEventListener("click", () => {
    main.style.display = "none";
    result.style.display = "grid";
})

rates.forEach(rate =>{
    rate.addEventListener("click", () => {
        // rates.forEach(rate => {
        //     rate.style.backgroundColor = 'hsla(217, 12%, 63%, 0.393)';
        // })
        // rate.style.backgroundColor = 'hsl(217, 12%, 63%)';
        x = rate.innerHTML;
        score.innerHTML = ` You have rated ${x} out of 5`
    })
})

