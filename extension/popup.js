// document.getElementById('btn').addEventListener('click', async function() {
//     try {
//         let tab = await chrome.tabs.create({url: 'https://chat.openai.com'});
        
//         let updateListener = async (tabId, info) => {
//             if (info.status === 'complete' && tabId === tab.id) {
//                 chrome.tabs.onUpdated.removeListener(updateListener);
//                 await chrome.scripting.executeScript({
//                     target: {tabId: tab.id},
//                     files: ['content.js']
//                 });
//             }
//         };

//         chrome.tabs.onUpdated.addListener(updateListener);
//     } catch (err) {
//         console.error(err);
//     }
// });
