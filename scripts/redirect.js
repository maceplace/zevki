// Variables
let hash = window.location.hash;

// Redirect

// MAIN
// Website
if (hash == '#md') {
  window.location.replace("https://macestudios.ru");
}

// CONTACT ME
// YouTube
if (hash == '#yt') {
  window.location.replace("https://youtube.com/@macedev?si=tfRWVtvo7UA0w1Of");
}
else if (hash == '#youtube') {
  window.location.replace("https://youtube.com/@macedev?si=tfRWVtvo7UA0w1Of");
}
// VKontakte
else if (hash == '#vk') {
  window.location.replace("https://vk.com/macedev");
}
// GitHub
else if (hash == '#github') {
  window.location.replace("https://github.com/maceplace");
}
// itch.io
else if (hash == '#itch') {
  window.location.replace("https://mace-dev.itch.io/");
}

// PROJECTS
// Website
else if (hash == '#dem') {
  window.location.replace("https://macestudios.ru/mem");
}
else if (hash == '#tuc') {
  window.location.replace("https://bulava.itch.io/tuc");
}
else if (hash == '#cards') {
  window.location.replace("https://macestudios.ru/zevki-cards/");
}

// ROFLS
// vk labuna
else if (hash == '#sex') {
  window.location.replace("https://vk.com/toxicballoonkid");
}
else if (hash == '#no') {
  window.location.replace("https://ismycomputeronfire.com/");
}

// NO REDIRECT
else {
  console.log("ERROR: Can't redirect the " + hash)
}