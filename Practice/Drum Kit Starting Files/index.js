var sounds = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/crash.mp3",
    k: "sounds/kick-bass.mp3",
    l: "sounds/snare.mp3"
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.textContent);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
});

function playSound(key) {
    if (sounds.hasOwnProperty(key)) {
        new Audio(sounds[key]).play();
    }
    else alert("Tedd anyádba! Faszt nyomogatsz?");
}