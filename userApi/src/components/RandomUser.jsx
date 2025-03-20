import axios from "axios";
import { useEffect, useState } from "react";

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUsers();
  }, [page]);

  async function fetchUsers() {
    setLoading(true)
    try {
      const res = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);
      setUsers((prevData) => [...prevData, ...res.data.results]);
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }

  function loadMoreUsers() {
    setPage((currentPages) => currentPages + 1)
  }

  console.log(users);
  return (
    <div className="user-container">
      <h1>Random Users</h1>
      <div className="user-lists">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.large} alt="" />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>{user.location.country}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      {loading && <p className="loading-text">Loading...</p>}
      <button onClick={loadMoreUsers} className="load-more-btn">Load more Users</button>
    </div>
  );
};

export default RandomUser;
