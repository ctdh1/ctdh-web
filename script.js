const botonesVideo = document.querySelectorAll(".video-play");

botonesVideo.forEach((boton) => {

    boton.addEventListener("click", function () {

        const contenedor = boton.parentElement;
        const video = contenedor.querySelector("video");

        if (video.paused) {
            video.play();
            boton.style.display = "none";
        }

    });

});


const videos = document.querySelectorAll(".video-wrapper video");

videos.forEach((video) => {

    video.addEventListener("click", function () {

        if (video.paused) {

            video.play();

        } else {

            video.pause();

            const boton =
                video.parentElement.querySelector(".video-play");

            boton.style.display = "block";
        }

    });

});
const contenedoresVideo = document.querySelectorAll(".video-wrapper");

contenedoresVideo.forEach((contenedor) => {

    const video = contenedor.querySelector("video");
    const boton = contenedor.querySelector(".video-play");

    boton.addEventListener("click", () => {
        video.play();
        contenedor.classList.add("reproduciendo");
    });

    video.addEventListener("click", () => {

        if (video.paused) {
            video.play();
            contenedor.classList.add("reproduciendo");
        } else {
            video.pause();
            contenedor.classList.remove("reproduciendo");
        }

    });

    video.addEventListener("ended", () => {
        contenedor.classList.remove("reproduciendo");
        video.currentTime = 0;
    });

});
