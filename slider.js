window.addEventListener("load", function () {
    const pictures = document.querySelectorAll(".slider-width");
    let currentPicture = 0;

    function changePicture() {
        pictures.forEach(function (picture) {
            picture.style.display = "none";
        });

        pictures[currentPicture].style.display = "block";
        currentPicture = (currentPicture + 1) % pictures.length;
    }

    if (pictures.length > 0) {
        changePicture();
        setInterval(changePicture, 3000);
    }
});