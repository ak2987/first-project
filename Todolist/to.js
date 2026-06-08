let btn = document.querySelector("#add");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Add new item (used by click and Enter key)
function addItem() {
    const value = inp.value.trim();
    if (!value) return; // don't add empty items

    const item = document.createElement("li");
    const text = document.createTextNode(value + " ");
    item.appendChild(text);

    const delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    // Attach delete event listener directly to the new button
    delbtn.addEventListener("click", () => {
        let par = delbtn.parentElement;
        par.remove();
    });

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
}

btn.addEventListener("click", addItem);

// Allow pressing Enter in the input to add the item
inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addItem();
});

// Use event delegation so both existing and future delete buttons work
ul.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("delete")) {
        const li = e.target.closest("li");
        if (li) li.remove();
    }
});


