<?php

include "../config/koneksi.php";

/** @var mysqli $conn */

$nama = $_POST['nama'];
$email = $_POST['email'];
$password = $_POST['password'];

$password_hash = password_hash($password, PASSWORD_DEFAULT);

$query = "INSERT INTO users (nama, email, password) 
          VALUES ('$nama', '$email', '$password_hash')";

if (mysqli_query($conn, $query)) {
    echo "Pendaftaran berhasil!";
} else {
    echo "Pendaftaran gagal: " . mysqli_error($conn);
}

?>