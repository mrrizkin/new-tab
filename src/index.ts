const displayDate = document.getElementById("dateTime");
const searchInput = document.getElementById("search") as HTMLInputElement;

if (searchInput !== null) {
  searchInput.addEventListener("keypress", (e: KeyboardEvent) => {
    if (e.keyCode === 13)
      window.open(
        `https://searx.be/search?q=${searchInput.value}&categories=general`,
        "_self"
      );
  });
}

if (displayDate !== null) {
  setInterval(() => {
    displayDate.innerHTML = Date();
  }, 1000);
}
