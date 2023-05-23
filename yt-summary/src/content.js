import { YoutubeTranscript } from "youtube-transcript";

let transcript = "";

YoutubeTranscript.fetchTranscript('sJIAzPQRxOU').then((transcriptArray) => {
    transcriptArray.forEach(e => {
        transcript += e.text.replace(/\n/g, '');
    });
})

console.log(transcript);

const arr = ["hi mom", "But you're my mom", "Stop hurting my feelings, mom!"];

async function sendTextAndWaitForResponse(inputText) {
  try {
    let textArea = document.getElementById("prompt-textarea");
    let button = textArea
      ? textArea.parentElement.querySelector("textarea + button")
      : null;
    if (textArea && button) {
      textArea.value = inputText;
      if (button.disabled) {
        button.disabled = false;
      }
      button.click();

      return new Promise((resolve) => {
        let checkExist = setInterval(function () {
          let div = document.querySelector(".text-2xl");
          if (!div) {
            clearInterval(checkExist);

            // select the last div with class "markdown prose w-full break-words dark:prose-invert dark"
            let lastDiv = document.querySelectorAll(
              "div.markdown.prose.w-full.break-words.dark"
            );
            lastDiv = lastDiv[lastDiv.length - 1];

            // select all its p children
            let pElements = lastDiv.querySelectorAll("p");

            // extract their text content and join them into one string
            let textContent = Array.from(pElements)
              .map((p) => p.textContent)
              .join(" ");

            resolve(textContent);
          }
        }, 500); // check every 500ms
      });
    }
  } catch (err) {
    console.error(err);
  }
}

// Usage:
(async function () {
    for (let i = 0; i < arr.length; i++) {
        let response = await sendTextAndWaitForResponse(arr[i]);
        console.log(response);
        setTimeout(1500)
    }
})();
