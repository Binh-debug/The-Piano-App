const keys = document.querySelectorAll(".note");
// const whiteKeys = document.querySelectorAll(".note.white");
// const blackKeys = document.querySelectorAll(".note.black");
// const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
// const BLACK_KEYS = ["s", "d", "g", "h", "j"];

function playNote(key) {
  let note = document.getElementById(key.dataset.note);
  key.classList.add("clicked");
  note.currentTime = 0;
  note.play();
  note.addEventListener("ended", function () {
    key.classList.remove("clicked");
  });
}
// click on note
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    playNote(key);
  });
});
// press on keyboard
keys.forEach(function (key) {
  let keyPress = key.dataset.key;
  // console.log(keyPress);
  document.addEventListener("keydown", function (e) {
    if (keyPress === e.key) {
      playNote(key);
    }
  });
});
// press on keyboard
// document.addEventListener("keydown", function (e) {
//   let keyPress = e.key;
//   let indexOfWhiteKey = WHITE_KEYS.indexOf(keyPress);
//   let indexOfBlackKey = BLACK_KEYS.indexOf(keyPress);
//   if (indexOfWhiteKey > -1) {
//     playNote(whiteKeys[indexOfWhiteKey]);
//   }
//   if (indexOfBlackKey > -1) {
//     playNote(blackKeys[indexOfBlackKey]);
//   }
// });
