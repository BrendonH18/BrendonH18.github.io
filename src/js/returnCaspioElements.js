export async function getElementFromDataPageWithAppKey(appKey, params) {
  let div;
  let resolveFn;
  let stop = false;

  const handleAction = (e) => {
    const result = document?.querySelector('input[name="AppKey"][value="' + appKey + '"]')?.parentElement?.parentElement?.parentElement;
    if (!result) return;
    if (stop) return;
    stop = true;
    resolveFn(result);
  };

  const handleEvent = (e) => {
    handleAction(e);
  };

  const addSearchParamsToUrl = (url, params = "") => {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        for (const item of value) {
          searchParams.append(key, item);
        }
      } else {
        searchParams.set(key, value);
      }
    }
    urlObj.search = searchParams.toString();
    return urlObj.toString();
  };

  return new Promise((resolve) => {
    div = document.createElement("div");
    div.classList.add(appKey);
    const script = document.createElement("script");
    const url = addSearchParamsToUrl("https://c2dcc460.caspio.com/dp/" + appKey + "/emb", params);
    script.src = url;
    script.async = true;
    script.onload = () => {
      resolveFn = resolve;
      document.addEventListener("DataPageReady", handleEvent);
    };
    setTimeout(() => {
      new AbortController().abort();
    }, 5000);
    div.appendChild(script);
    document.body.appendChild(div);
  });
}
