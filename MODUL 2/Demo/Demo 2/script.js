// Fungsi untuk menambahkan task baru
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const taskList = document.getElementById('task-list');

    // Membuat elemen list baru
    const li = document.createElement('li');
    
    // Input field untuk task yang bisa diedit
    const taskEditInput = document.createElement('input');
    taskEditInput.type = 'text';
    taskEditInput.value = taskText;

    // Tombol hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Menambahkan input dan tombol ke elemen li
    li.appendChild(taskEditInput);
    li.appendChild(deleteBtn);

    // Menambahkan li ke taskList
    taskList.appendChild(li);

    // Mengosongkan input field
    taskInput.value = '';
}

// Fungsi untuk mengedit task (otomatis, karena input field dapat langsung diubah)
