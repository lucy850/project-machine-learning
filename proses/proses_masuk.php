<?php

include "../config/koneksi.php";

/** @var mysqli $conn */

$email = $_POST['email'];
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);

    if (password_verify($password, $user['password'])) {
        echo "Login berhasil!";
    } else {
        echo "Password salah!";
    }
} else {
    echo "Email tidak ditemukan!";
}

?>