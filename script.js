<script>
function openPreview() {
    const modal = document.getElementById("videoModal");
    const mainVideo = document.getElementById("mainVideo");
    const modalVideo = document.getElementById("modalVideo");

    const source = mainVideo.querySelector("source").src;

    modal.style.display = "flex"; // 🔥 THIS IS REQUIRED

    modalVideo.src = source;

    setTimeout(() => {
        modalVideo.play();
    }, 50);
}

function closePreview() {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");

    modal.style.display = "none";

    modalVideo.pause();
    modalVideo.src = "";
}
</script>
