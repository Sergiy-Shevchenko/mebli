
import styles from "./page.module.css";

import Hero from "./components/Hero/Hero";
import Servise from "./components/Servise/Servise";
import Advantages from "./components/Advantages/Advantages";


export default function Home() {
  return (
  <div>
  <Hero/>
  <Servise/>
  <Advantages/>
  </div>
  );
}
