const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");

const loop = (direction, e) => {
    e.preventDefault();

    if (direction === "right") {
        items.appendChild(items.firstElementChild);
    } else {
        items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
};

rightBtn.addEventListener("click", e => {
    loop("right", e);
});

leftBtn.addEventListener("click", e => {
    loop("left", e);
});

    // let currentRight = parseInt(computedStyles.right)

    // if (currentRight < 500) {
    //    items.style.right = `${currentRight + 100}px`;
    // }
// });

// leftBtn.addEventListener("click", e => {
    // e.preventDefault();
    // let currentRight = parseInt(computedStyles.right)

    // if (currentRight > 0) {
    //     items.style.right = `${currentRight - 100}px`;
    // }
// });