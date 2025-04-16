function Screen1(){
return <div className="w-screen h-screen flex items-center gap-16 flex-col bg-blue-700">
    <div className="text-center text-4xl mt-11 text-white font-semibold"><span className="text-green-400">Webinar</span>.gg</div>
    <div className="flex justify-center flex-col gap-5  text-white">
        <h1 className="text-center text-2xl font-medium mb-8">Verify Your Age</h1>
        <p>Please confirm your birth year. This data will not be stored</p>
        <input type="text" placeholder="Your Birth Year"  className="p-4 bg-slate-400 bg-opacity-35 text-white placeholder-white rounded-xl" />
        <button className="p-4 bg-teal-500 rounded-xl">Continue</button>

    </div>
</div>
}

export default Screen1;