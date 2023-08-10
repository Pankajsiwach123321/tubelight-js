let mybtn = document.querySelector("button")
let btn = document.querySelector(".circle")

  console.log("button");
  console.log(".circle");

let val = 2;
mybtn.addEventListener("click", function () {
    if (val === 2) {
        btn.classList.add("fun");
        btn.classList.add("circle2");
        mybtn.classList.add("button2")
        mybtn.classList.remove("font")
        mybtn.classList.remove("button")
        mybtn.innerHTML = "off";
        val = 1
    }
    else if (val === 1) {
        mybtn.classList.add("font")
        mybtn.classList.add("button")
        btn.classList.remove("fun");
        btn.classList.remove("circle2");
        mybtn.classList.remove("button2")
        mybtn.innerHTML = "on";
        val = 2
    }
})