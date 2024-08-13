import Image from "next/image";
import Header from "./Componentes/header";
import Page1 from "./Componentes/page1";
import Page2 from "./Componentes/page2";
import Page3 from "./Componentes/page3";
import Page4 from "./Componentes/page4";
import Page5 from "./Componentes/page5";
import Page6 from "./Componentes/page6";

export default function Home() {
  return (
    <main className="w-full h-full font-roboto text-white   relative ">
      <Header></Header>

      <Page1></Page1>
      <Page2></Page2>
      <Page3></Page3>
      <Page4></Page4>
      <Page5></Page5>
      <Page6></Page6>
    </main>
  );
}
