import { SidebarToggle } from "../icons/SidebarToggle";
import { ListItem } from "./ListItem";
import HomeIcon from "../icons/HomeIcon";
import { UserGrpIcon } from "../icons/UserGrpIcon";
import { BillingIcon } from "../icons/BillingIcon";
import { UserIcon } from "../icons/UserIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { useState } from "react";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [activeItem, setActiveItem] = useState("Home");
  
  if (!sidebarOpen) {
    return (
      <div className="mr-10">
        <div className="fixed top-0 left-0 bg-white h-screen shadow-lg z-10 transition-all duration-300 w-16">          
          <div
            className="cursor-pointer hover:bg-slate-100 rounded-lg p-3 m-2 transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <SidebarToggle />
          </div>
                    
          <div className="flex justify-center py-4 border-b border-slate-100">
            <div className="bg-blue-500 rounded-md w-8 h-8 flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-1 mt-6 px-2">
            <div 
              className={`w-full cursor-pointer p-2 rounded-lg transition-all duration-200 ${
                activeItem === "Home" 
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500" 
                  : "hover:bg-slate-100"
              }`}
              onClick={() => setActiveItem("Home")}
            >
              <ListItem size="sm" icon={<HomeIcon />} />
            </div>
            <div 
              className={`w-full cursor-pointer p-2 rounded-lg transition-all duration-200 ${
                activeItem === "Webinars" 
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500" 
                  : "hover:bg-slate-100"
              }`}
              onClick={() => setActiveItem("Webinars")}
            >
              <ListItem size="sm" icon={<UserGrpIcon />} />
            </div>
            <div 
              className={`w-full cursor-pointer p-2 rounded-lg transition-all duration-200 ${
                activeItem === "Billing" 
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500" 
                  : "hover:bg-slate-100"
              }`}
              onClick={() => setActiveItem("Billing")}
            >
              <ListItem size="sm" icon={<BillingIcon />} />
            </div>
            <div 
              className={`w-full cursor-pointer p-2 rounded-lg transition-all duration-200 ${
                activeItem === "User Management" 
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500" 
                  : "hover:bg-slate-100"
              }`}
              onClick={() => setActiveItem("User Management")}
            >
              <ListItem size="sm" icon={<UserIcon />} />
            </div>
            <div 
              className={`w-full cursor-pointer p-2 rounded-lg transition-all duration-200 ${
                activeItem === "Settings" 
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500" 
                  : "hover:bg-slate-100"
              }`}
              onClick={() => setActiveItem("Settings")}
            >
              <ListItem size="sm" icon={<SettingsIcon />} />
            </div>
          </div>
                    
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
              <span className="text-xs font-medium text-slate-600">PK</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Expanded sidebar
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-10 transition-all duration-300 flex flex-col">      
      <div className="p-4 border-b border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <div
            className="cursor-pointer hover:bg-slate-100 p-2 rounded-lg transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <SidebarToggle />
          </div>
          
          <div className="bg-blue-500 rounded-md p-2 text-sm flex items-center">
            <div className="text-white font-medium">Webinar</div>
            <div className="text-green-400 font-medium">.gg</div>
          </div>
        </div>
                
        <div className="flex items-center gap-3 p-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/logo.png" className="w-full h-full object-cover" alt="User" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="font-medium text-sm truncate">Prabhleem Kaur</p>
            <p className="text-xs text-slate-500 truncate">prabhleem@gmail.com</p>
          </div>
        </div>
      </div>
            
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-1">
          <div 
            className={`cursor-pointer rounded-lg transition-all duration-200 ${
              activeItem === "Home" 
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500 pl-3" 
                : "hover:bg-slate-100 pl-4"
            }`}
            onClick={() => setActiveItem("Home")}
          >
            <ListItem size="lg" title="Home" icon={<HomeIcon />} />
          </div>
          <div 
            className={`cursor-pointer rounded-lg transition-all duration-200 ${
              activeItem === "Webinars" 
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500 pl-3" 
                : "hover:bg-slate-100 pl-4"
            }`}
            onClick={() => setActiveItem("Webinars")}
          >
            <ListItem size="lg" title="Webinars" icon={<UserGrpIcon />} />
          </div>
          <div 
            className={`cursor-pointer rounded-lg transition-all duration-200 ${
              activeItem === "Billing" 
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500 pl-3" 
                : "hover:bg-slate-100 pl-4"
            }`}
            onClick={() => setActiveItem("Billing")}
          >
            <ListItem size="lg" title="Billing" icon={<BillingIcon />} />
          </div>
          <div 
            className={`cursor-pointer rounded-lg transition-all duration-200 ${
              activeItem === "User Management" 
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500 pl-3" 
                : "hover:bg-slate-100 pl-4"
            }`}
            onClick={() => setActiveItem("User Management")}
          >
            <ListItem size="lg" title="User Management" icon={<UserIcon />} />
          </div>
          <div 
            className={`cursor-pointer rounded-lg transition-all duration-200 ${
              activeItem === "Settings" 
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500 pl-3" 
                : "hover:bg-slate-100 pl-4"
            }`}
            onClick={() => setActiveItem("Settings")}
          >
            <ListItem size="lg" title="Settings" icon={<SettingsIcon />} />
          </div>
        </div>
      </div>
            
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">© 2025 Webinar.gg</span>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">v1.2</span>
        </div>
      </div>
    </div>
  );
}