import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Otp from "./components/Otp";

function App() {
  
  return (
    // <Screen2 heading={"Let's Get Sarted"}>
    //   <Input type="text" placeholder={"Email Id"}/>
    // </Screen2>

    <Screen2 heading={"Check Your Email For A Code"} subheading={"Please enter the verification code sent to your email Id prabhleen@gmail.com"}>
      <Otp number={6}/>
    </Screen2>
  );
}

export default App;
