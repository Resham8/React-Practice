import { AddIcon } from "../icons/AddIcon";
import { ArrowsIcon } from "../icons/ArrowsIcons";
import { CalendarIcon } from "../icons/CalendarIcon";
import { RecordIcon } from "../icons/RecordIcon";
import OptionCards from "./OptionCards";

function MainContent() {  
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
    
  const getGreeting = () => {
    const hours = currentDate.getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="w-full">
      <div className="h-48 hidden md:block">
        <img
          src="./background-img.jpg"
          alt="Header background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-11 gap-7 p-8">        
        <div className="h-auto rounded-2xl bg-white md:col-span-3 -translate-y-24 shadow-lg col-span-11 hidden md:block ml-10">
          <div className="flex flex-col justify-center items-center h-full text-slate-600 p-6">
            <img
              src="./logo.png"
              alt="User profile"
              className="object-contain h-36 rounded-lg shadow-sm"
            />
            <h2 className="font-bold text-black mt-4 mb-2 text-xl">Prabhleem Kaur</h2>
            <div className="flex flex-col justify-center items-center">
              <p className="flex items-center gap-1">
                <span className="text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                prabhleem@gmail.com
              </p>
              <p className="flex items-center gap-1">
                <span className="text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                9899999882
              </p>
            </div>
            <p className="mt-4 flex items-center gap-1">
              <span className="text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Delhi, India
            </p>
          </div>
        </div>
        
        <div className="md:col-span-8 col-span-11 flex flex-col gap-6">
          <div className="p-4">
            <p className="font-medium text-lg mb-1 text-slate-500">{formattedDate}</p>
            <h2 className="font-bold text-2xl text-blue-950">
              {getGreeting()}, Prabhleem! 👋
            </h2>
          </div>

          <div className="grid grid-cols-8 gap-7">
            
            <div className="h-auto rounded-2xl bg-white md:col-span-5 col-span-11 shadow-lg p-4">
              <div className="flex justify-between bg-slate-100 rounded-md p-2 mb-4">
                <div className="flex gap-4 items-center">
                  <CalendarIcon />
                  <p className="font-medium">{formattedDate}</p>
                </div>

                <div className="flex">
                  <button className="hover:bg-slate-200 rounded-md p-1 transition-colors">
                    <ArrowsIcon direction="left" />
                  </button>
                  <button className="hover:bg-slate-200 rounded-md p-1 transition-colors">
                    <ArrowsIcon direction="right" />
                  </button>
                </div>
              </div>
              
              <ScheduleListItem
                time="11:30 AM"
                endTime="12:30 PM"
                isLive={true}
                title="UX Webinar"
              />
              <ScheduleListItem
                time="02:00 PM"
                endTime="03:00 PM"
                isLive={false}
                title="My First Webinar"
              />
              <ScheduleListItem
                time="04:30 PM"
                endTime="05:30 PM"
                isLive={false}
                title="Important Webinar"
              />
              <ScheduleListItem
                time="06:45 PM"
                endTime="08:00 PM"
                isLive={false}
                title="Webinar 1"
                isBorderBottom={false}
              />
              
              <button className="mt-4 text-blue-500 text-sm flex items-center gap-1 hover:underline">
                <span>View all scheduled webinars</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            
            <div className="h-auto rounded-2xl bg-white md:col-span-3 col-span-11 shadow-lg p-5">
              <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
              <OptionCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleListItem({ time, endTime, isLive, title, isBorderBottom = true }) {
  return (
    <div className="hover:bg-slate-50 rounded-lg transition-all">
      <div className="flex gap-6 items-center mb-3 p-2">
        <div>
          <h2 className="text-lg font-semibold">{time}</h2>
          <p className="text-sm text-slate-500">{endTime || time}</p>
        </div>
        
        <div className={`w-1 h-10 ${isLive ? "bg-green-500" : "bg-slate-300"} rounded-full`}></div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            {isLive && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-green-500 rounded-full inline-block animate-pulse"></span>
                Live
              </span>
            )}
            {!isLive && (
              <span className="text-sm text-slate-500">Upcoming</span>
            )}
          </div>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </div>
      
      {isBorderBottom && <div className="w-full h-px bg-slate-200"></div>}
    </div>
  );
}

export default MainContent;