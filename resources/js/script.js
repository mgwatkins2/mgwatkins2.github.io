// Fetch data from Lanyard API
fetch('https://api.lanyard.rest/v1/users/301713791807258626')
    .then(response => response.json())
    .then(data => {
        // Check if online
        const isOnline = data.data.discord_status === 'online';

        // Images
        const onlineImg = document.getElementById('online-img');
        const offlineImg = document.getElementById('offline-img');

        if(isOnline) {
            onlineImg.style.display = 'block'; // Show
            offlineImg.style.display = 'none'; // Hide
        } else {
            onlineImg.style.display = 'none'; // Hide
            offlineImg.style.display = 'block'; // Show
        }
    })
    .catch(error => {
        console.error('Error fetching data from Lanyard API:', error);
    });