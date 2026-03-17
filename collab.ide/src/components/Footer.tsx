export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">


          <div>
            <div className="flex items-center gap-3 text-white font-semibold text-lg">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
                {"</>"}
              </div>
              Collab.ide
            </div>

            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              The collaborative code editor for modern development teams.
              Build, test, and deploy together.
            </p>
          </div>


          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
            </ul>
          </div>


      

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
            </ul>
          </div>

        </div>


        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Collab.ide. All rights reserved.
        </div>

      </div>
    </footer>
  );
}