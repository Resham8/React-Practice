import { useRef, useState } from "react";
import Button from "./Button";

function Otp({ number }) {
  const ref = useRef(Array(number).fill(0));
  
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center gap-3">
        {Array(number).fill(1).map((x, index) => 
          <SubOtpBox
          referance={(e) => ref.current[index] = e}
          
            key={index}
            
            onDone={() => {
                if(index + 1 >= number){
                    return;
                }
                ref.current[index + 1].focus();
            }}

            onBack={() => {
                if(index == 0){
                    return;
                }
                ref.current[index - 1].focus();
            }}
          />
        )}
      </div>
      <Button disabled={disabled}>Continue</Button>
    </div>
  );
}

function SubOtpBox({ referance, onDone, onBack }) {
  const [inputVal, setInputVal] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        ref={referance}
        maxLength={1}
        onKeyUp={(e) => {
          if (e.key == "Backspace") {
            if (inputVal === "") {
              onBack();
            } else {
              setInputVal("");
            }
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (Number(val)) {
            setInputVal(val);
            onDone();
          } else {
            //
          }
        }}
        className="w-[40px] h-[50px] text-center rounded-xl bg-blue-500 outline-none px-3 text-white text-lg"
      />
    </div>
  );
}

export default Otp;
