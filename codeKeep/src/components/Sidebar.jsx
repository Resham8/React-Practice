import { Lock, PanelLeftIcon, Star } from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);

  function toggleSidebar() {
    setOpen((prev) => !prev);
  }

  if (!open) {
    return (
      <aside className="bg-[#333333] h-12 p-3 text-white flex flex-col gap-4 rounded-lg border m-3">
        <div className="cursor-pointer">
          <PanelLeftIcon color="white" onClick={toggleSidebar} />
        </div>
      </aside>
    );
  }
  return (
    <>
      <aside className="w-80 bg-[#333333] h-screen p-3 text-white flex flex-col gap-4">
        <header>
          <div className="flex justify-between p-1">
            <h2 className="text-xl font-bold">My Lists</h2>
            <PanelLeftIcon color="white" onClick={toggleSidebar} className="cursor-pointer"/>
          </div>
        </header>

        <section>
          <p className="text-md font-semibold mb-3">Created by me</p>
          <div className="flex justify-between items-center bg-[#434343] rounded-xl p-2">
            <div className="flex gap-3 items-center">
              <span className="bg-white inline-block p-1 rounded-md">
                <Star fill="#f2b04f" stroke="#f2b04f" />
              </span>
              <h2 className="font-semibold text-lg">Favourite</h2>
            </div>

            <Lock size={20} strokeWidth={2.5} />
          </div>
        </section>
      </aside>
    </>
  );
}

export default Sidebar;
