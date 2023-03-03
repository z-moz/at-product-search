import React, { useState } from "react";

const BASE_URL = "https://global.atdtravel.com/api/";

function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState({
    geo: "en",
    title: "",
    limit: 10,
    offset: 0,
    id: "",
  });

  async function searchDatabase(searchArgs) {
    let query = new URLSearchParams(searchArgs).toString();
    try {
      let response = await fetch(BASE_URL + "products?" + query, {
        method: "GET",
      });
      if (response.ok) return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function getList() {
    const result = await searchDatabase(search);
    setList([...result.data]);
  }

  const handleChange = (e) => {
    setSearch({
      ...search,
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

  return (
    <>
      Product search
      <form autoComplete="off" onSubmit={handleSubmit}>
        Title
        <input
          type="search"
          placeholder="Start typing"
          name="title"
          value={search.title}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
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
