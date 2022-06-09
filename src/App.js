import axios from 'axios';
import { useState, useRef } from 'react';

import './App.css';

function App() {
  const input = useRef();
  const [name, setName] = useState("");

  const storeCookie = async () => {
    try {
      await axios.post("http://localhost:8081/new", {
        name: input.current.value
      },
        { withCredentials: true }
      );

    } catch (err) {
      console.log(err);
    }
  }

  const getCookie = async () => {
    try {
      const { data } = await axios.get("http://localhost:8081/name", { withCredentials: true });
      setName(data.msg.name);
      const msg = data.msg.name
      setName(msg);

    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="App">

      <div className="form">
        <p>{name}</p>
        <label htmlFor="input">userName</label>
        <input ref={input} className="id" />
        <button onClick={storeCookie}>Sore cookie</button>
        <button onClick={getCookie}>Retrieve cookie</button>

      </div>

    </div>
  );
}

export default App;
