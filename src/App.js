import React, { useEffect, useState } from "react";

const App = () => {
  const [res, setRes] = useState("");
  console.log(res);

  useEffect(() => {
    api();
  }, []);

  const api = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setRes(json));
  };

  return (
    <div>
      {res &&
        res?.map((item, index) => {
          return <div>{item.title}</div>;
        })}
    </div>
  );
};
export default App;
