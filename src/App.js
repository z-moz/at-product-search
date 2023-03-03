import React, { useState, useEffect } from "react";

const BASE_URL = "https://global.atdtravel.com/api/";

function App() {
  const searchInit = {
    geo: "en",
    // title: "",
    // limit: 10,
    // offset: 0,
    // id: "",
  };

  const [list, setList] = useState([]);
  const [search, setSearch] = useState(searchInit);

  async function searchDatabase(searchArgs) {
    let query = new URLSearchParams(searchArgs).toString();
    try {
      let response = await fetch(BASE_URL + "products?" + query, {
        method: "GET",
      });
      if (response.ok) return response.json();
      throw new Error("Products not found.");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getList() {
      const result = await searchDatabase(search);
      setList([...result.data]);
    }
    getList();
  }, [search]);

  return (
    <>
      Product search
      <form>
        Title
        <input></input>
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
