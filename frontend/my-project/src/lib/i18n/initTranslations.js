import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { i18nConfig } from "@/lib/i18n/i18n";

export async function initTranslations(
  locale,
  namespaces,
  options
) {
  const i18nInstance = options?.i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!options?.resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language, namespace) =>
          import(`./translations/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources: options?.resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: options?.resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.getFixedT(
      locale,
      namespaces[0],
      options?.keyPrefix
    ) 
  };
}


export async function serverSideTranslation(
  locale,
  namespaces,
  options
) {
  return await initTranslations(locale, namespaces, options);
}