import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TitleList } from "../components/TitleList";

const Home: NextPage = (props) => {
  // 「Unhandled error」の場合
  // React.useEffect(() => {
  //   // const res = fetch("http://localhost:3001");
  //   const func = async () => {
  //     try {
  //       // const res = await fetch("http://localhost:3000/api/hello");
  //       const res = await fetch(
  //         "https://next-app-three-rose.vercel.app/api/hello"
  //       );
  //       console.log(res);
  //       // const a = { b: "あいう" };
  //       // console.log(a.c.toString());
  //     } catch (error) {
  //       console.error(error);
  //       // throw new Error("");
  //     }
  //   };
  //   func();
  // }, []);

  // const a = { b: "あいう" };
  // console.log(a.c.toString());

  console.log("props", props);

  return (
    <div className={styles.container}>
      <TitleList />
    </div>
  );
};

// export async function getStaticProps() {
//   console.log("いつ呼ばれてるのか？");
//   const res = await fetch("http://localhost:3000/api/hello");
//   // const res = await fetch("https://next-app-three-rose.vercel.app/api/hello");
//   const jsons = await res.json();
//   return {
//     props: { jsons },
//   };
// }

export default Home;
