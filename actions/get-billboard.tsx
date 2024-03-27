import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  // console.log("fetched from getBillboard:", `${URL}/${id}`);
  const res = await fetch(`${URL}/${id}`);
  //console.log("res from getBillboard:", res);
  //console.log("res.json() from getBillboard:", res.json());
  return res.json();
};

export default getBillboard;
