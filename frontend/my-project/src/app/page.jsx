import HomePage from "./[locale]/home/page";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

const Home = () => {
  return <HomePage />;
};

export default Home;
