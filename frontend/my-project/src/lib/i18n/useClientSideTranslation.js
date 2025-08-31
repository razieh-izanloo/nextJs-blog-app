import { useEffect, useState } from "react";
import { initTranslations } from "./initTranslations";

export const useClientSideTranslation = (locale, namespaces, options) => {
  const [translate, setTranslate] = useState({t:false});

  useEffect( () => {
    (async function(){
        const translation = await initTranslations(locale, namespaces, options);
        setTranslate(translation);

    })()
  }, []);

  return translate;
};