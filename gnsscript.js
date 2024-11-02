
    const roomList = [
        { room: "101", block: "Ramanujan", teacher: "Mr. John", subject: "Math", photo: "photos/teacher1.jpg" },
        { room: "102", block: "Visvesvaraya", teacher: "Ms. Williams", subject: "English", photo: "photos/teacher1.jpg" },
        { room: "201", block: " APJ ", teacher: "Dr. Brown", subject: "Biology", photo: "photos/teacher1.jpg" },
        { room: "202", block: "c v raman", teacher: "Ms. Smith", subject: "Chemistry", photo: "photos/teacher1.jpg" },
        { room: "301", block: "C V Raman", teacher: "Dr. Taylor", subject: "Physics", photo: "photos/teacher1.jpg" },
        { room: "303", block: "C", teacher: "Ms. Davis", subject: "History", photo: "photos/teacher1.jpg" },
        { room: "304", block: "C", teacher: "Ms. Davis", subject: "History", photo: "photos/teacher1.jpg" },
        { room: "305", block: "C", teacher: "Ms. Davis", subject: "History", photo: "photos/teacher1.jpg" },
        { room: "306", block: "C", teacher: "Ms. Davis", subject: "History", photo: "photos/teacher1.jpg" },
        { room: "309", block: "C", teacher: "Ms. Davis", subject: "History", photo: "photos/teacher1.jpg" },

        // Add additional entries as needed
    ];
    
    // More rooms can be added

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function filterRooms() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filterInput = document.getElementById('filter').value;
    const roomListElement = document.getElementById('room-list');
    const noResultsElement = document.getElementById('no-results');

    roomListElement.innerHTML = '';
    noResultsElement.style.display = 'none';

    const filteredRooms = roomList.filter(room => {
        const matchesSearch = 
            room.room.toLowerCase().includes(searchInput) || 
            room.teacher.toLowerCase().includes(searchInput) || 
            room.subject.toLowerCase().includes(searchInput);
        const matchesBlock = filterInput ? room.block === filterInput : true;
        return matchesSearch && matchesBlock;
    });

    if (filteredRooms.length > 0) {
        filteredRooms.forEach(room => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${room.photo}" alt="${room.teacher}" class="teacher-photo"><br><hr>
                <div class="room-title">Room ${room.room} <br>${room.block} Block</div>
                <div class="room-details">Teacher: ${room.teacher},<br> Subject: ${room.subject},</div>`;
            roomListElement.appendChild(li);
        }); 
    } else {
        noResultsElement.style.display = 'block';
    }
}


// Event listeners with debounce on search input
document.getElementById('search').addEventListener('input', debounce(filterRooms, 300));
document.getElementById('filter').addEventListener('change', filterRooms);
document.getElementById('filter-button').addEventListener('click', filterRooms);

// Initial call to display all rooms
filterRooms();
