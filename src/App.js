import React, { useState } from "react";

function App() {
  const [logs, setLogs] = useState([]);

  const handleMouseOver = () => {
    const currentTime = new Date().toLocaleString();
    setLogs([...logs,{'Time' : currentTime , 'Event' : 'In'}]);
  };

  const handleMouseOut = () => {
    const currentTime = new Date().toLocaleString();
    setLogs([...logs,{'Time' : currentTime , 'Event' : 'Out'}]);
  };

  return (
    <div className="App">
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Heading 1 (onMouseOver In and Out Time will be printed in table)
      </h1>
      <h2>Heading 2</h2>
      <div>Div</div>
      <table border ="1px" cellpadding="5px">
        <thead>
          <tr>
            <th>Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.Time}</td>
              <td>{log.Event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
