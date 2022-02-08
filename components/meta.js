import Head from "next/head";
import {CMS_NAME, HOME_OG_IMAGE_URL} from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌶️</text></svg>"
      />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Мы делаем хорошие видеоролики.`} />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  );
}
