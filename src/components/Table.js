import React from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Destination</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item) => {
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
  );
}

export default Table;
