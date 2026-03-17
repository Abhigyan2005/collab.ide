import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 flex flex-col justify-center w-[95%] max-w-7xl z-50 
  bg-white/10 backdrop-blur-md shadow-md rounded-2xl overflow-x-hidden"
    >
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
            {"</>"}
          </div>
          Collab.ide
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a className="hover:text-gray-700 cursor-pointer">About</a>
          <a className="hover:text-gray-700 cursor-pointer">Features</a>
          <a
            href="https://github.com/Abhigyan2005/collab.ide"
            tabIndex={1}
            className="hover:text-gray-700 cursor-pointer"
          >
            Github
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Show when="signed-out">
            <SignInButton />
          </Show>

          <SignUpButton>
            <button className="bg-white border text-black border-gray-200 px-4 py-2 rounded-lg">
              Start Coding
            </button>
          </SignUpButton>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pt-4 text-sm font-medium">
          <a>About</a>
          <a>Features</a>
          <a>Github</a>

          <div className="border-t pt-4 flex flex-col gap-3">
            <button className="text-left">Sign out</button>

            <button className="bg-white border text-black border-gray-200 px-4 py-2 rounded-lg">
              Start Coding
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
