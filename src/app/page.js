import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-screen bg-sky-50">
      <div className="flex justify-between">
        <div className="flex-1">
          <h1>MY NAME IS MONIKA SELVAM</h1>
          <h1>MY CODE NAME IS BLACK FIRE</h1>
          <h1>MY MISSION IS TO DO SOFTWARE DEVELOPMENT</h1>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/Anya.png"
            height={100}
            width={100}
            alt="Anya Forger"
          ></Image>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
