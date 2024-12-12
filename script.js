// Variables
let hash = window.location.hash;

// Redirect
switch (hash) {
  // MAIN
  // Website
  case '#md':
    window.location.replace("https://macestudios.ru");

  // CONTACT ME
  // YouTube
  case '#yt':
    window.location.replace("https://youtube.com/@macedev?si=tfRWVtvo7UA0w1Of");
  case '#youtube':
    window.location.replace("https://youtube.com/@macedev?si=tfRWVtvo7UA0w1Of");
  // VKontakte
  case '#vk':
    window.location.replace("https://vk.com/macedev");
  // GitHub
  case '#github':
    window.location.replace("https://github.com/maceplace");
    

  // PROJECTS
  // Website
  case '#dem':
    window.location.replace("https://macestudios.ru/mem");
  case '#tuc':
    window.location.replace("https://bulava.itch.io/tuc");

  // ROFLS
  // vk labuna
  case '#sex':
    window.location.replace("https://vk.com/toxicballoonkid");

  // NO REDIRECT
  default:
    console.log("Can't redirect the " + hash)
}