function fooBar() {
  let counter = 0;

  while (counter < 10) {
    console.log("count is " + counter);
    counter += 2;
  }
}

fooBar();

if (new Date().getMonth() === 20) {
  localStorage.removeItem("user");
}

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  alert("hi");
});
