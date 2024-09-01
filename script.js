// Get all video elements
const videos = document.querySelectorAll('video');

// Function to toggle play/pause on video
const togglePlayPause = (event) => {
    // Get the video that was clicked or touched
    const video = event.currentTarget.querySelector('video');
    // Check if the video is paused or playing
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

// Attach event listeners to each video container
const videoContainers = document.querySelectorAll('.video-container');
videoContainers.forEach(container => {
    container.addEventListener('click', togglePlayPause);
    container.addEventListener('touchstart', togglePlayPause); // For touchscreen devices
});

// Auto-play video in view on scroll
const playVisibleVideos = () => {
    videos.forEach(video => {
        const rect = video.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            video.play();
        } else {
            video.pause();
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', playVisibleVideos);
playVisibleVideos(); // Call the function initially to playing videos in view
