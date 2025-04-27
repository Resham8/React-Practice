import React from 'react';
import { Calendar, Plus, Film } from 'lucide-react';

export default function OptionCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
            
      <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-sm bg-white">
        <div className="bg-[#2DE2E6] p-3 rounded-md">
          <Calendar className="w-6 h-6 text-black" />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center">Schedule a Webinar</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-sm bg-white">
        <div className="bg-[#2DE2E6] p-3 rounded-md">
          <Plus className="w-6 h-6 text-black" />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center">Join a Webinar</p>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-sm bg-white">
        <div className="bg-[#2DE2E6] p-3 rounded-md">
          <Film className="w-6 h-6 text-black" />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center">Open Recordings</p>
      </div>

    </div>
  );
}
