document.getElementsByClassName("btnadd")[0].addEventListener("click", f);
let items = document.getElementById("itemname");
function f() {
  if (items.value !== "") {
    let btncomplete = document.createElement("Button");
    btncomplete.setAttribute("class", "btncomplete");
    btncomplete.innerHTML = "complete";
    document.body.appendChild(btncomplete);
    let btndelete = document.createElement("Button");
    btndelete.setAttribute("class", "btndelete");
    btndelete.innerHTML = "delete";
    document.body.appendChild(btndelete);
    let label = document.createElement("Label");
    label.setAttribute("id", "label");
    label.innerHTML = items.value;
    document.body.appendChild(label);
    items.value = "";
    let breakline = document.createElement("br");
    breakline.setAttribute("id", "breakline");
    document.body.appendChild(breakline);
    btndelete.addEventListener("click", f2);
    function f2() {
      btncomplete.parentNode.removeChild(btncomplete);
      btndelete.parentNode.removeChild(btndelete);
      label.parentNode.removeChild(label);
      breakline.parentNode.removeChild(breakline);
    }
    btncomplete.addEventListener("click", f3);
    function f3() {
      if (btncomplete.innerHTML === "complete") {
        btncomplete.innerHTML = "undo";
        label.setAttribute("style", "text-decoration:line-through");
      } else {
        btncomplete.innerHTML = "complete";
        label.setAttribute("style", "text-decoration:none");
      }
    }
  } else {
    alert("please write the name of the item");
  }
}
