// Video library - Play video on click
document.addEventListener("DOMContentLoaded", function() {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.querySelector('video').getAttribute('src');
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('video-modal');
            videoContainer.innerHTML = `
                <div class="video-modal-content">
                    <button class="close-btn">X</button>
                    <video controls autoplay>
                        <source src="${videoSrc}" type="video/mp4">
                        Your browser does not support video playback.
                    </video>
                </div>
            `;
            document.body.appendChild(videoContainer);

            // Close the modal when clicking the close button
            const closeButton = videoContainer.querySelector('.close-btn');
            closeButton.addEventListener('click', function() {
                document.body.removeChild(videoContainer);
            });
        });
    });
});
