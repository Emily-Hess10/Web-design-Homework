function searchPets() {
    const searchBox = document.getElementById("search-box");
    const searchText = searchBox.value.toLowerCase();

    const items = document.querySelectorAll(".image-container");

    items.forEach(item => {
        const itemText = item.innerText.toLowerCase();

        if (itemText.includes(searchText)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}
