document.addEventListener("DOMContentLoaded", () => {
    const carta = document.querySelector(".carta");

    setTimeout(() => {
        carta.classList.remove("dormida");
        carta.classList.add("despierta");
    }, 600);
});
