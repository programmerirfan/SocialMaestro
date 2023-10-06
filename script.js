function copyToClipboard(elementId, button) {
  var copyText = document.getElementById(elementId).textContent;
  var textArea = document.createElement("textarea");
  textArea.value = copyText;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    if (successful) {
      var msg = "Copied!";
      var copiedMessage = document.getElementById("copiedMessage");
      copiedMessage.style.display = "block";
      copiedMessage.textContent = msg;
      button.textContent = "Copied";
      button.style.backgroundColor = "limegreen";
    } else {
      button.textContent = "Copy failed";
    }
  } catch (err) {
    console.error("Unable to copy", err);
    button.textContent = "Copy failed";
  }

  document.body.removeChild(textArea);

  setTimeout(function () {
    var copiedMessage = document.getElementById("copiedMessage");
    copiedMessage.style.display = "none";
    button.textContent = "Copy";
    button.style.backgroundColor = "limegreen";
  }, 1500);
}
