let value = "";
let cal = "";
let del;
let equal = document.getElementById("equal").innerHTML;
console.log(Array.from(document.getElementById("a").outerText));
let one = Array.from(document.getElementById("a").outerText);
one = one.toString();
console.log(one);

let out = document.querySelectorAll(".point")
Array.from(out).forEach((out) => {
    out.addEventListener("click", (e) => {
        let num = e.target
        console.log(num.innerHTML)

        if (e.target.innerHTML == equal) {
            value = eval(cal)
            document.getElementById("result").innerHTML = value;
            console.log(value)
        }
        else if (e.target.innerHTML == "×") {
            value = value + num.innerHTML
            cal = cal + "*"
            document.getElementById("result").innerHTML = value;
        }
        else if (e.target.innerHTML == "Clear") {
            value = ""
            cal = ""
            document.getElementById("result").innerHTML = value;
        }
        else if (e.target.innerHTML == "DEL") {
            del = value.slice(0, value.length - 1);
            value = del
            console.log(value)
            cal = cal.slice(0, cal.length - 1);
            document.getElementById("result").innerHTML = value;
        }
        else if (e.target.innerHTML == "(") {
            value = value + "×" + num.innerHTML
            cal = cal + "*" + num.innerHTML
            document.getElementById("result").innerHTML = value;
        }
        else {
            cal = cal + num.innerHTML
            value = value + num.innerHTML
            document.getElementById("result").innerHTML = value;
        }
    })
})
console.log(equal)