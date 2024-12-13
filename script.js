
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
} else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
}

fetch('videos.json')
.then(response => response.json())
.then(videos => {
    const videoContainer = document.getElementById('videoContainer');
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <a href="${video.videoUrl}" target="_blank">
                <button>Watch Video</button>
            </a>
        `;
        videoContainer.appendChild(videoCard);
});



})
.catch(error => console.error('Error loading video data:', error));

document.getElementById('modeToggle').addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark');
    
    if (isDarkMode) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('mode', 'light'); 
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('mode', 'dark'); 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      alert(`Thank you, ${name}! Your message has been submitted successfully.`);
      form.reset();
    });
});