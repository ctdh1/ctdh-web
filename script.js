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
