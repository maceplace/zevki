// Variables
let hash = window.location.hash;

// Redirect
switch (hash) {
  // Website
  case '#md':
    window.location.replace("https://macestudios.ru");
    break;
  // YouTube
  case '#yt':
    window.location.replace("https://youtube.com/@macedev?si=tfRWVtvo7UA0w1Of");
    break;
  // VK
  case '#vk':
    window.location.replace("https://vk.com/macedev");
    break;
  // No redirect
  default:
    console.log("Can't redirect the " + hash)
}