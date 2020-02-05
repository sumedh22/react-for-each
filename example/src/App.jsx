import React, { useState } from "react";

import { For } from "react-for-each";

export default () => {
  const [data, setData] = useState([]);
  const handleClick = action => {
    if (action === "add") {
      setData([...data, data.length]);
    }

    if (action === "remove") {
      data.pop();
      setData([...data]);
    }
  };

  return (
    <div>
      <button onClick={e => handleClick("add")}>add</button>
      <button onClick={e => handleClick("remove")}>remove</button>
      <For
        data={data}
        noData={() => "No data to display!"}
        itemRenderer={(row, idx) => <div key={idx}> {row + 1} </div>}
      ></For>
    </div>
  );
};
