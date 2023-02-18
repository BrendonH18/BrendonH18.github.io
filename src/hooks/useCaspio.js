import { useState, useEffect } from "react";
import { getElementFromDataPageWithAppKey } from "../js/returnCaspioElements";

function useCaspio(appKey, params) {
  const [domElement, setDomElement] = useState(() => {
    async function fetchData() {
      try {
        const response = await getElementFromDataPageWithAppKey(appKey, params);
        const list = Array.from(document.getElementsByClassName(appKey));
        list.forEach((x) => x.remove());
        setDomElement(response);
      } catch (error) {
        console.warn(error);
      }
    }
    fetchData();
  });

  const setValue = (params) => {
    async function fetchData() {
      try {
        const response = await getElementFromDataPageWithAppKey(appKey, params);
        const list = Array.from(document.getElementsByClassName(appKey));
        list.forEach((x) => x.remove());
        setDomElement(response);
      } catch (error) {
        console.warn(error);
      }
    }
    fetchData();
  };
  return [domElement, setValue];
}

export default useCaspio;
