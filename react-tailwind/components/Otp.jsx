import { useRef, useState } from "react";

function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    return <div className="flex justify-center gap-3">
        <SubOtpBox referance={ref1} onDone={() => {ref2.current.focus()}}/>
        <SubOtpBox referance={ref2} onDone={() => {ref3.current.focus()}} onBack={() =>{ref1.current.focus()}}/>
        <SubOtpBox referance={ref3} onDone={() => {ref4.current.focus()}} onBack={() =>{ref2.current.focus()}}/>
        <SubOtpBox referance={ref4} onDone={() => {ref5.current.focus()}} onBack={() =>{ref3.current.focus()}}/>
        <SubOtpBox referance={ref5} onDone={() => {ref6.current.focus()}} onBack={() =>{ref4.current.focus()}}/>
        <SubOtpBox referance={ref6} onDone={() => {ref6.current.focus()}} onBack={() =>{ref5.current.focus()}}/>
    </div>
}

function SubOtpBox({referance, onDone, onBack}){
    const [inputVal, setInputVal] = useState("");
    
    return <div>
        <input type="text" value={inputVal} ref={referance} maxLength={1} onKeyUp={(e) =>{
            if(e.key == "Backspace"){
                onBack();
            }
        }}
         onChange={(e)=>{
            const val = e.target.value;
            if(Number(val)){
                setInputVal(val);
                onDone()   
            } else{
                //
            }
        }}  className="w-[40px] h-[50px] text-center rounded-xl bg-blue-500 outline-none px-3 text-white text-lg"/>
    </div>
}

export default Otp;