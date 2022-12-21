// 1
console.log(document.getElementById("text"));

// 2
console.log(document.getElementsByTagName("h2"));

// 3
console.log(document.getElementsByClassName("box"));

// 4
document.querySelector("#heading").textContent = "Hello World";

// 5
function onClickbtn() {
  let flex = document.querySelector("#box-con");
  if (flex.style.display == "flex") {
    flex.style.display = "block";
  } else {
    flex.style.display = "flex";
  }
}

// 6
// document
// The document object represent a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page.
// window
// The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created.

// 7
// console.log(btn2);
btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  text = document.querySelector("#heading2");
  text.textContent = "heading";
  text.style.color = "red";
});

// 8
btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  text = document.querySelector("#textch");
  text.textContent = "Welcome to Elevation academy";
});

// 9
setInterval(
  (Time = () => {
    let dt = new Date();
    let hr = dt.getHours();
    let mi = dt.getMinutes();
    let sec = dt.getSeconds();
    // console.log(hr, mi, sec);
    document.getElementById("hr").innerHTML = hr + ":";
    document.getElementById("mi").innerHTML = mi + ":";
    document.getElementById("sec").innerHTML = sec;
  }),
  1000
);

// 10
let s = document.querySelector("select");
let y = document.querySelector("#choice");
s.addEventListener("change", () => {
  y.innerText = s.options[s.selectedIndex].value;
  // console.log(s.options[s.selectedIndex].value);
});
