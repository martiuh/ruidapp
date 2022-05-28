function App() {
  const ruidoElementArray = Array.from(
    document.querySelectorAll(`div[data-ruido="true"]`)
  );

  function desactivateButton(ruidoButton) {
    ruidoButton.removeAttribute('disabled');
  }

  ruidoElementArray.forEach((element) => {
    const ruidoButton = element.firstElementChild;
    const audio = element.lastElementChild;

    audio.addEventListener('load', desactivateButton(ruidoButton));

    ruidoButton.addEventListener('click', () => {
      audio.play();
    });
  });
}

App();
