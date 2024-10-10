function validateForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;

    if (nama === '' || email === '' || alamat === '') {
        alert('Semua field harus diisi!');
        return false;  // Menghentikan form dari pengiriman jika ada field kosong
    } else {
        alert('Pendaftaran berhasil!');
        return true;  // Memungkinkan form untuk dikirim jika semua field sudah diisi
    }
}
