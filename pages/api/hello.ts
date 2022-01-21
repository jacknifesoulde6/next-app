// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // try {
  // const a = { b: "fajiga" };
  // console.log(a.c.toString());
  res.status(500);
  res.json({ name: "John Doe" });
  // } catch (e) {
  //   res.status(500);
  // }
}
