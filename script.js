const no = document.getElementById("no");
const yes = document.getElementById("yes");
const head = document.getElementById("message");
no.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 100 + 10);
  let y = Math.floor(Math.random() * 100 + 10);
  no.style.bottom = x + "px";
  no.style.left = y + "px";
});
yes.addEventListener("click", () => {
  head.textContent = `Thank you. I love you too.`;
});
