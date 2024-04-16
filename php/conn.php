<?php
spl_autoload_register(function ($class){
    require __DIR__ . "/src/$class.php";
});

set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");

ini_set('display_errors', 0);
$error_log_path = __DIR__.'/error_log.txt';
ini_set('error_log', $error_log_path);

header("Content-type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "forum");