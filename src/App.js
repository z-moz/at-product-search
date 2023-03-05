import React, { useState, useEffect } from "react";
import db from "./db";
import Table from "./components/Table";

const init = {
  geo: "en",
  title: "",
  limit: 10,
  offset: 0,
  id: "",
};

function App() {
  const [args, setArgs] = useState(init);
  const [data, setData] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await db.search(args);
        setData((data) => (data = result));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [args]);

  const handleChange = (e) => {
    setArgs({
      ...args,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList(data.data);
  };

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
        <button type="submit">
          Show {Boolean(data.meta) && data.meta.total_count} results
        </button>
      </form>
      <Table list={list} />
    </>
  );
}

export default App;
