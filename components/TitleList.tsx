import Image from "next/image";
import React from "react";
// import { AddTitle } from "src/components/AddTitle";

export const TitleList = () => {
  React.useEffect(() => {
    // const res = fetch("http://localhost:3001");
    const func = async () => {
      try {
        // const res = await fetch("http://localhost:3000/api/hello");
        const res = await fetch(
          "https://next-app-three-rose.vercel.app/api/hello"
        );
        console.log(res);
        // const a = { b: "あいう" };
        // console.log(a.c.toString());
      } catch (error) {
        console.error(error);
        // throw new Error("");
      }
    };
    func();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2 m-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
      こんにちは
    </div>
  );
};
