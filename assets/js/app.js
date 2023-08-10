let mybtn = document.querySelector("button")
let btn = document.querySelector(".circle")

  console.log("button");
  console.log(".circle");

let val = 1;
mybtn.addEventListener("click", function () {
    if (val === 1) {
        btn.classList.add("fun");
        btn.classList.add("circle2");
        mybtn.classList.remove("font")
        mybtn.classList.remove("button")
        mybtn.innerHTML = "off";
        val = 0
    }
    else if (val === 0) {
        btn.classList.remove("fun");
        btn.classList.remove("circle2");
        mybtn.classList.add("font")
        mybtn.classList.add("button")
        mybtn.innerHTML = "on";
        val = 1
    }
})