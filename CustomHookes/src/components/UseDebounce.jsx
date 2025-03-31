import useDebounce from "../hookes/useDebouance";

function UseDebounce() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debounceFn = useDebounce(sendDataToBackend);

  return (
    <>
      <input type="text" onChange={debounceFn} />
    </>
  );
}

export default UseDebounce;
