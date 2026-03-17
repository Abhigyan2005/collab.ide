import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect } from "react";
import { Zap, Code, UsersRound } from "lucide-react";

function Landing() {
  useEffect(() => {
    const cards = document.getElementById("cards");
    if (!cards) return;

    const handleMouseMove = (e: MouseEvent) => {
      for (const card of document.getElementsByClassName(
        "card",
      ) as HTMLCollectionOf<HTMLElement>) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    console.log("hey");

    cards.addEventListener("mousemove", handleMouseMove);
    return () => cards.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col relative overflow-x-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-225 
             bg-[radial-gradient(circle,rgba(129,140,248,0.35),transparent_60%)]
              blur-[120px]  -z-10 overflow-x-hidden"
        ></div>

        <div
          className="absolute -top-25 left-[30%] w-150 h-150
              bg-[radial-gradient(circle,rgba(140,80,255,0.25),transparent_60%)]
              blur-[120px] overflow-x-hidden"
        ></div>

        <Nav />

        <main className="flex-1 pt-28">
          <section className="max-w-7xl mx-auto px-6 text-center py-24 h-screen">
            <h1 className="text-7xl md:text-8xl font-bold text-gray-300 leading-[1.05] tracking-tight">
              <span className="text-white">Code together,</span>
              <br />
              in real-time.
            </h1>

            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              Collaborate with your team in a real-time coding environment.
              Build, test, and ship faster together.
            </p>

            <button className="z-100 bg-white border text-black border-gray-200 px-4 py-2 rounded-lg mt-3 cursor-pointer hover:scale-110 transition">
              Start Building {">"}
            </button>
          </section>

          <section id="About" className="min-h-screen mx-auto px-6 py-24">
            <div className="text-5xl md:text-8xl font-bold text-gray-300 leading-[1.05] tracking-tight">
              <span className="text-white">Everything you need </span>
              <br />
              to build faster
            </div>

            <div className="mt-3 text-10 md:text-xl text-gray-300">
              A complete development enviroment in your browser, designed for
              modern teams who value speed and collaboration.{" "}
            </div>
            <div
              id="cards"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10"
            >
              <div className="card border border-[#222] rounded-2xl hover:border-gray-500 transition">
                <div className="card-inner flex flex-col gap-4 bg-[#111] p-6 rounded-2xl">
                  <div className="bg-[#222] border border-[#222] rounded-lg p-2 w-10">
                    <Zap color="#ffff00" />
                  </div>
                  <div className="font-bold">Instant Preview</div>
                  <p className="text-gray-300">
                    See your changes live as you type.
                  </p>
                </div>
              </div>

              <div className="card border border-[#222] rounded-2xl hover:border-gray-500 transition">
                <div className="card-inner flex flex-col gap-4 bg-[#111] p-6 rounded-2xl">
                  <div className="bg-[#222] border border-[#222] rounded-lg p-2 w-10">
                    <Code color="#12ed54" />
                  </div>
                  <div className="font-bold">Intelligent Autocomplete</div>
                  <p className="text-gray-300">
                    Get context aware code suggestions
                  </p>
                </div>
              </div>

              <div className="card border border-[#222] rounded-2xl hover:border-gray-500 transition">
                <div className="card-inner flex flex-col gap-4 bg-[#111] p-6 rounded-2xl">
                  <div className="bg-[#222] border border-[#222] rounded-lg p-2 w-10">
                    <UsersRound color="#06a4f9" />
                  </div>
                  <div className="font-bold">Real-time Collaboration</div>
                  <p className="text-gray-300">
                    Code together with your team live.
                  </p>
                </div>
              </div>

              <div className="card border border-[#222] rounded-2xl hover:border-gray-500 transition">
                <div className="card-inner flex flex-col gap-4 bg-[#111] p-6 rounded-2xl">
                  <div className="bg-[#222] border border-[#222] rounded-lg p-2 w-10">
                    <UsersRound color="#06a4f9" />
                  </div>
                  <div className="font-bold">Instant Preview</div>
                  <p className="text-gray-300">
                    See your changes live as you type.
                  </p>
                </div>
              </div>

              <div className="card border border-[#222] rounded-2xl hover:border-gray-500 transition">
                <div className="card-inner flex flex-col gap-4 bg-[#111] p-6 rounded-2xl">
                  <div className="bg-[#222] border border-[#222] rounded-lg p-2 w-10">
                    <UsersRound color="#06a4f9" />
                  </div>
                  <div className="font-bold">Instant Preview</div>
                  <p className="text-gray-300">
                    See your changes live as you type.
                  </p>
                </div>
              </div>

              <div className="card border border-[#222] rounded-2xl hover:border-gray-500 transition">
                <div className="card-inner flex flex-col gap-4 bg-[#111] p-6 rounded-2xl">
                  <div className="bg-[#222] border border-[#222] rounded-lg p-2 w-10">
                    <Zap color="#ffff00" />
                  </div>
                  <div className="font-bold">Instant Preview</div>
                  <p className="text-gray-300">
                    See your changes live as you type.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Landing;
