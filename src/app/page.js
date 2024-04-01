import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import Lander from "@/Components/Page1/Lander";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Lander/>
    </div>
  );
}
