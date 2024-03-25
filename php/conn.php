<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$error_log_path = __DIR__.'/error_log.txt';
ini_set('error_log', $error_log_path);

$conn = new mysqli("localhost", "root", "", "forum");
?>