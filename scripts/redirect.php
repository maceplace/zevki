<?php
// Get the requested URI
$requestUri = $_SERVER['REQUEST_URI'];

// Define redirection rules
$redirects = [
    // Socials
    '/yt' => 'https://youtube.com/@macedev',
    '/youtube' => 'https://youtube.com/@macedev',

    '/vk' => 'https://vk.com/macedev',
    
    // Github
    '/gh' => 'https://github.com/maceplace',
    '/git' => 'https://github.com/maceplace',
    '/github' => 'https://github.com/maceplace',

    '/itch' => 'https://mace-dev.itch.io/',
    '/itchio' => 'https://mace-dev.itch.io/',
    '/itch.io' => 'https://mace-dev.itch.io/',

    // Projects
    '/dem' => 'https://macestudios.ru/mem',
    '/mem' => 'https://macestudios.ru/mem',

    '/tuc' => 'https://bulava.itch.io/tuc',

    '/cards' => 'https://macestudios.ru/zevki-cards',

    // Memes
    '/sex' => 'https://vk.com/macedev',
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
