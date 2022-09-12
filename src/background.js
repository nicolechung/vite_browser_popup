import browser from "webextension-polyfill";

async function getTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [firstTab] = await browser.tabs.query(queryOptions);
  return firstTab;
}

browser.tabs.onUpdated.addListener(function () {
  getTab().then((tab) => {
    console.log({ tab });
    browser.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ["content_script.js"],
    });
  });
});
