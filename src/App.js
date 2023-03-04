import React, { useState, useEffect } from "react";
import db from "./db";

function App() {
  const [list, setList] = useState([]);
  const [searchArgs, setSearchArgs] = useState({
    geo: "en",
    title: "",
    limit: 10,
    offset: 0,
    id: "",
  });

  async function getList() {
    const result = await db.search(searchArgs);
    setList([...result.data]);
  }

  const handleChange = (e) => {
    setSearchArgs({
      ...searchArgs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      getList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      Product search
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          name="title"
          value={searchArgs.title}
          onChange={handleChange}
        ></input>
        <button type="submit">Show results</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img src={item.img_sml} alt={item.title} loading="lazy"></img>
                </td>
                <td>{item.title}</td>
                <td>{item.dest}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
