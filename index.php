<?php
// Get the requested URI
$requestUri = $_SERVER['REQUEST_URI'];

// Define redirection rules
$redirects = [
    '/yt' => 'https://youtube.com/@macedev',
    '/youtube' => 'https://youtube.com/@macedev',
    '/vk' => 'https://vk.com/macedev',
    '/github' => 'https://github.com/maceplace',
    '/cards' => 'https://macestudios.ru/zevki-cards',
];

// Check if the requested URI matches any of the defined redirects
if (array_key_exists($requestUri, $redirects)) {
    header("Location: " . $redirects[$requestUri]);
    exit();
}

// Default redirection if no match is found
header("Location: https://macestudios.ru/");
exit();
?>
