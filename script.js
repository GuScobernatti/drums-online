const keys = document.querySelectorAll(".key");

window.onkeydown = (e) => {
  keys.forEach((keyboard) => {
    if (e.key == keyboard.id) {
      const idAudio = document.getElementById(`s_key${e.key}`);
      idAudio.play();
      keyboard.classList.add("active");

      window.addEventListener("keyup", () => {
        keyboard.classList.remove("active");
      });
    }
  });
};

const form = document.querySelector("form");

const compositionPlay = () => {
  const composition = document.getElementById("composition");
  const compositionValue = composition.value;
  const splitValue = compositionValue.toLowerCase().split("");
  let index = 0;
  let keyIndex = 0;
  let interval;

  interval = setInterval(() => {
    if (index < splitValue.length) {
      const letter = splitValue[index];
      const idAudio = document.getElementById(`s_key${letter}`);
      keys.forEach((key) => {
        if (key.id == letter) {
          key.classList.add("active");
        } else {
          key.classList.remove("active");
        }
      });

      if (letter == " ") {
        setTimeout(() => {
          idAudio.play();
        }, 2000);
      } else {
        idAudio.play();
      }
      index++;
    } else {
      clearInterval(interval);
      composition.value = "";
      keys.forEach((key) => {
        key.classList.remove("active");
      });
    }
  }, 250);

  //composition.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  compositionPlay();
});
