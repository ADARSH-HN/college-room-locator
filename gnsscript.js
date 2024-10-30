const roomList = [
    { room: "101", block: "A", teacher: "Mr. John", subject: "Math" },
    { room: "102", block: "A", teacher: "Ms. Williams", subject: "English" },
    { room: "201", block: "B", teacher: "Dr. Brown", subject: "Biology" },
    { room: "202", block: "B", teacher: "Ms. Smith", subject: "Chemistry" },
    { room: "301", block: "C", teacher: "Dr. Taylor", subject: "Physics" },
    { room: "302", block: "C", teacher: "Ms. Davis", subject: "History" },
    // Add more rooms as needed 
];

function filterRooms() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filterInput = document.getElementById('filter').value;
    const roomListElement = document.getElementById('room-list');
    const noResultsElement = document.getElementById('no-results');

    // Clear existing list
    roomListElement.innerHTML = '';
    noResultsElement.style.display = 'none';

    // Filter the room list based on the search input and block filter
    const filteredRooms = roomList.filter(room => {
        const matchesSearch = 
            room.room.toLowerCase().includes(searchInput) || // Case-insensitive search for room
            room.teacher.toLowerCase().includes(searchInput) || // Case-insensitive search for teacher
            room.subject.toLowerCase().includes(searchInput); // Case-insensitive search for subject
        const matchesBlock = filterInput ? room.block === filterInput : true;
        return matchesSearch && matchesBlock;
    });

    // Update the room list
    if (filteredRooms.length > 0) {
        filteredRooms.forEach(room => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="room-title">Room ${room.room} - Block ${room.block}</span>
                            <span class="room-details"> (Teacher: ${room.teacher}, Subject: ${room.subject})</span>`;
            roomListElement.appendChild(li);
        });
    } else {
        noResultsElement.style.display = 'block'; // Show no results message
    }
}

// Event listeners
document.getElementById('search').addEventListener('input', filterRooms);
document.getElementById('filter').addEventListener('change', filterRooms);
document.getElementById('filter-button').addEventListener('click', filterRooms);

// Call the filter function on page load to display all rooms initially
filterRooms();
