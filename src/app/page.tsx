import { Quiz } from "./Quiz";
import { Timeline } from "./Timeline";
import { WhatToDo } from "./WhatToDo";
import Faq from "./Faq";

export default function Home() {
  return (
    <div className="min-h-screen  items-center justify-evenly flex flex-col self-center bg-white text-black">
      {/* <div className="bg-stone-600 w-full items-center justify-evenly flex flex-row">
        <img src="/1.jpg" className=" h-[250px]  object-cover rounded-lg" />

        <div className="   p-6 py-10 text-center text-white">
          <h1 className="text-5xl font-bold">Assisi Szent Ferenc</h1>
          <p className="mt-4 text-xl">
            Egy alázatos ember, aki békét, szeretetet és egyszerűséget
            hirdetett.
          </p>
        </div>
      </div> */}
      <div className="w-full p-2 md:p-4 ">
        <div className="relative w-full  h-96 md:h-[400px] xl:h-[600px] rounded-lg">
          <header className=" z-20 rounded-lg absolute h-full flex flex-col justify-evenly backdrop-blur-sm top-0 bottom-0 left-0 right-0 p-6 py-10 text-center text-white">
            <h1 className="text-5xl font-bold">Assisi Szent Ferenc</h1>
            <p className="mt-4 text-xl">
              Egy alázatos ember, aki békét, szeretetet és egyszerűséget
              hirdetett.
            </p>
          </header>
          <img
            src="/1.jpg"
            className="w-full absolute left-0 right-0 top-0 bottom-0 h-full  z-10 object-cover rounded-lg"
          />
        </div>
      </div>
      <div className=" w-full xl:w-2/3 flex flex-col gap-7 self-center p-2 md:p-4 xl:px-10">
        {/* <header className=" bg-stone-600 rounded-lg  p-6 py-10 text-center text-white">
          <h1 className="text-5xl font-bold">Assisi Szent Ferenc</h1>
          <p className="mt-4 text-xl">
            Egy alázatos ember, aki békét, szeretetet és egyszerűséget
            hirdetett.
          </p>
        </header>
        <img src="/1.jpg" className="w-full  object-cover rounded-lg" /> */}

        <main className="p-2 w-full mx-auto">
          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Szent Ferenc élete</h2>
            <p className="text-black/70 leading-relaxed">
              Assisi Szent Ferenc 1181-ben született Assisiben, Olaszországban.
              Fiatal éveiben gazdag kereskedőcsaládból származott, és szívesen
              élt fényűző életet. Azonban egy súlyos betegség és hadifogság után
              Ferenc ráébredt az anyagi javak hiábavalóságára, és elhatározta,
              hogy hátralévő életét Isten szolgálatának szenteli. Feladta minden
              vagyonát, és a szegénység, egyszerűség, valamint a béke útját
              választotta.
            </p>
            <p className="mt-4 text-black/70 leading-relaxed">
              Ferenc a természetet és az állatokat különösen nagy becsben
              tartotta. Gyakran prédikált az állatoknak, és minden élőlényt
              Isten teremtésének csodájaként ünnepelt. Ennek köszönhetően őt az
              állatok és a természet védőszentjeként tisztelik.
            </p>
          </section>

          {/* Teachings Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Szent Ferenc tanításai
            </h2>
            <ul className="list-disc pl-6 text-black/70 leading-relaxed">
              <li>
                <strong>Egyszerűség:</strong> Szent Ferenc az egyszerű életmódot
                hirdette, azt tanította, hogy az igazi boldogság nem az anyagi
                javakban rejlik, hanem az Istennel és embertársainkkal való
                kapcsolatban.
              </li>
              <li>
                <strong>Alázatosság:</strong> Ferenc mélyen hitt abban, hogy az
                alázatosság a legfontosabb erény. Saját életével példázta, hogy
                az alázat és a szerénység nem gyengeség, hanem az igazi erő
                forrása.
              </li>
              <li>
                <strong>Béke és szeretet:</strong> Az emberek és minden
                teremtmény iránti szeretete volt központi tanítása. Őszinte
                hitvallása volt, hogy mindenki megérdemli a szeretetet, és hogy
                a béke az egyetlen út az igazi boldogsághoz.
              </li>
              <li>
                <strong>Természetvédelem:</strong> Szent Ferenc szoros
                kapcsolatban állt a természettel, és arra ösztönözte követőit,
                hogy tiszteljék és óvják a Földet, mint Isten teremtésének
                ajándékát.
              </li>
            </ul>
          </section>

          {/* Legacy Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Szent Ferenc öröksége
            </h2>
            <p className="text-black/70 leading-relaxed">
              Assisi Szent Ferenc halála után is inspirálta az embereket
              világszerte. Ferenc halálát követően alapított rendje, a ferences
              rend, továbbra is a szegénység, egyszerűség és béke értékeit
              hirdeti. Szent Ferenc 1228-ban lett szentté avatva, és mára az
              állatok, a természet és a környezetvédelem védőszentje lett.
            </p>
            <p className="mt-4 text-black/70 leading-relaxed">
              Az október 4-én ünnepelt Ferenc-napon sok helyen állatokat visznek
              templomokba, hogy megáldják őket. Szent Ferenc ma is azoknak a
              példaképe, akik hisznek a környezet megóvásában, a békés
              együttélésben és a szerénységben.
            </p>
          </section>

          <Faq />

          {/* Quiz Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Kvíz: Mennyire ismered Assisi Szent Ferencet?
            </h2>
            <Quiz />
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Kvíz: Állítsd időrendi sorrendbe
            </h2>
            <Timeline />
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Kvíz: Mit tenne Ferenc?
            </h2>
            <WhatToDo />
          </section>
        </main>
      </div>
      <footer className="bg-black w-full text-white flex flex-col text-center items-center justify-evenly h-60">
        <p>
          Made with ❤️ by{" "}
          <a target="_blank" href="https://crossguardagency.web.app">
            Botos Levente
          </a>
        </p>
      </footer>
    </div>
  );
}
