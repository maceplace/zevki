// Variables
let hash = window.location.hash;
let goto = window.location;

// Redirect
switch (hash) {
  // Website
  case '#md':
    goto.replace("https://macestudios.ru");
    break;
  // YouTube
  case '#yt':
    goto.replace("https://youtube.com/@macedev?si=tfRWVtvo7UA0w1Of");
    break;
  // VK
  case '#vk':
    goto.replace("https://vk.com/macedev");
    break;
  // No redirect
  default:
    console.log("Can't redirect the " + hash)
}