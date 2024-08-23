// chon cac phan tu
const panels = document.querySelectorAll(".panel");

panels.forEach((i) => {
  console.log(i);
  i.addEventListener("click", () => {
    removeActive();
    i.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((e) => {
    e.classList.remove("active");
  });
}
