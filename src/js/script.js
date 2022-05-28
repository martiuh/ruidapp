function App() {
  const ruidoElementArray = Array.from(
    document.querySelectorAll(`div[data-ruido="true"]`)
  );

  function desactivateButton(ruidoButton) {
    console.log(ruidoButton);
    ruidoButton.removeAttribute('disabled');
  }

  ruidoElementArray.forEach((element) => {
    const ruidoButton = element.firstElementChild;
    const audio = element.lastElementChild;

    audio.addEventListener('load', desactivateButton(ruidoButton));

    function stopSong() {
      audio.pause();
      audio.currentTime = 0;
    }

    ruidoButton.addEventListener('click', () => {
      stopSong();
      audio.play();
    });
  });
}

App();
