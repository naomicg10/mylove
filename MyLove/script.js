document.querySelector(".busqueda-button").addEventListener("click", function () {
    const imageContainer = document.getElementById("imageContainer");
    const tabsContainer = document.getElementById("tabsContainer");

    imageContainer.style.display = "grid";
    tabsContainer.style.display = "flex";

    setTimeout(() => {
        imageContainer.classList.add("visible");
        tabsContainer.classList.add("visible");
    }, 100); 
});