
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
} else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
}


function updateQuote(eventType = 'event', numGames = 1) {
    const quoteResult = document.getElementById('quoteResult');
    let quote = 0;

    if (eventType === 'event') {
        quote = 9000 * numGames;
    } else if (eventType === 'corporate') {
        quote = 3000 * numGames;
    } else if (eventType === 'tournament') {
        quote = 5000 * numGames;
    }

    quoteResult.textContent = `Approximation: ${quote} JMD`;
}

updateQuote();


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

// Handle "Get a Quote" form submission
document.getElementById('quoteForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const service = document.getElementById('service').value;
    const duration = parseInt(document.getElementById('duration').value, 10);

    if (!isNaN(duration) && duration > 0) {
        updateQuote(service, duration);
    } else {
        alert('Please enter a valid number of games.');
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
