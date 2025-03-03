import "./App.css";
import { PostComponent } from "./Post";
import { useState } from "react";

function App() {
  const[posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description }
    />)

  function addPost(){
   
   setPosts([...posts, {
    name:"Resham",
    subtitle:"1m followers",
    time:"2m ago",
    image:"https://pbs.twimg.com/profile_images/1844416731625758731/IM0i5XfZ_400x400.jpg",
    description:"Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison"
    }])
  }

  return (
    <>
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh", margin:20}}>
    <button onClick={addPost}>Add Post</button>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div>
        {postComponents}
      </div>
    </div>
    </div>      
    </>
  );
}

export default App;