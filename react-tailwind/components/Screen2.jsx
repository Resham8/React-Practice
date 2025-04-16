import Button from "./Button";
import Input from "./Input";

function Screen2({heading,subheading, children}) {
  return (
    <div className="h-screen bg-blue-700 flex p-16 items-center gap-14 flex-col">
      <div className="text-white text-3xl mb-8">
        <span className="text-green-400 font-semibold">Webniar</span>.gg
      </div>

      <div className="text-white flex flex-col gap-11 w-full max-w-lg px-4 items-center">
        <h1 className="text-2xl font-semibold mb-8 text-center">
          {heading}
        </h1>
        {subheading && <p className="text-sm text-gray-300">{subheading}</p>}

        <div className="flex flex-col gap-5">
            {children}

          <Button disabled={false}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default Screen2;
