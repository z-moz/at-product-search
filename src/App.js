import React, { useState, useEffect } from "react";
import db from "./db";

const init = {
  geo: "en",
  title: "",
  limit: 10,
  offset: 0,
  id: "",
};

function App() {
  const [args, setArgs] = useState(init);
  const [search, setSearch] = useState(init);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setArgs({
      ...args,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(args);
  };

  useEffect(() => {
    async function getList() {
      try {
        const result = await db.search(search);
        setList([...result.data]);
      } catch (error) {
        console.log(error);
      }
    }
    getList();
  }, [search]);

  return (
    <>
      Product search
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          name="title"
          value={args.title}
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
