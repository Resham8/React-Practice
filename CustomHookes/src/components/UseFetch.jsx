import { useState } from "react";
import { useFetch } from "../hookes/useFetch";

function UseFetch() {
  const [currentPost, setCurrentPost] = useState(1);
  const {finalData, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/todos/${currentPost}`,10000);


  if(loading){
    return <div>
      Loading.....
    </div>
  }

  if(error){
    return <div>
        Error while fetching the data.....
    </div>
  }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}

export default UseFetch;