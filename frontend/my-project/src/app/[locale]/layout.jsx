export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

async function layoutLocaleRoot({ children }) {
  return <>{children}</>;
}
export default layoutLocaleRoot;
