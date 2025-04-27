export function ListItem({title, icon, size}) {
    if (size === "sm") {
        return <div className="hover:bg-slate-200 flex justify-between cursor-pointer rounded-xl text-blue-500 p-2 my-4">
            <div>
                {icon}
            </div>
        </div>
    }
    return <div className="hover:bg-slate-200 flex justify-between p-4 m-4 cursor-pointer rounded-xl text-blue-500 ">
        <div>
            {title}
        </div>
        <div>
            {icon}
        </div>
    </div>
}