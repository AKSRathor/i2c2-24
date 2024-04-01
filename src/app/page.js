import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
    </div>
  );
}
