import { YoutubeTranscript } from "youtube-transcript";
import { ChatGPTUnofficialProxyAPI } from "chatgpt";
// import Authenticator from 'openai-authenticator'
import { config } from "dotenv";
import Authenticator from "openai-token";

config();
let transcript = "";

YoutubeTranscript.fetchTranscript('A-PFgCM4jwM').then((transcriptArray) => {
    transcriptArray.forEach(e => {
        console.log(e.text);
        transcript += e.text.replace(/\n/g, '');
    });
})

// console.log(transcript);

// const api = new ChatGPTUnofficialProxyAPI({
//   accessToken: process.env.OPENAI_ACCESS_TOKEN_1,
//   apiReverseProxyUrl: "https://freechat.xyhelper.cn/backend-api/conversation",
//   // completionParams: {
//   //   model: 'gpt-4'  
//   // }
// });

// const res = await api.sendMessage("Write a poem about flowers in the style of The Joker");
// console.log(res.text);

// const authenticator = new Authenticator();
// console.log(await authenticator.login("ishola.freelance@gmail.com", process.env.OPENAI_PASS));
