document.addEventListener("DOMContentLoaded", function () {
    new Sortable(document.getElementById("sortable-list-1"), {
        animation: 150,  // Sanfte Animation
    });

    shuffleList();
});

function shuffleList() {
    let list = document.getElementById("sortable-list-1");
    let items = Array.from(list.children);

    // Fisher-Yates Shuffle Algorithmus
    for (let i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        list.appendChild(items[j]);
    }
}
