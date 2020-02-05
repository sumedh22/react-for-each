import React, { useState } from "react";

import { For } from "react-for-each";

export default () => {
    const [data, setData] = useState([])
    const handleClick = ()=>{
        setData([...data, data.length])
    }

    return (
      <div>
          <button onClick={handleClick}>add</button>
        <For
          data={data}
          noData={() => "No data to display!"}
          itemRenderer={(row, idx) => <div key={idx}> {row+1} </div>}
        >
        </For>
      </div>
    );
  
}
