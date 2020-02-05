# react-for-each

> Syntactic sugar for using loops in React with optional no-data message

[![NPM](https://img.shields.io/npm/v/react-for-each.svg)](https://www.npmjs.com/package/react-for-each) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-for-each
```

## Usage

```jsx
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
```

## License

MIT © [sumedh22](https://github.com/sumedh22)
