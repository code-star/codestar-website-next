import Footer from "@/components/Footer/Footer";
import TopBar from "@/components/TopBar/TopBar";
import Head from "next/head";
import { PropsWithChildren } from "react";
import styles from "./layout.module.scss";

export default function MdxLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Codestar</title>
        <meta name="description" content="Codestar blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>

      <Footer />
    </>
  );
}
