import React from "react";
import ExpirationDate from "./components/ExpirationDate";

function App() {
  const handleInputChange = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <ExpirationDate onChange={handleInputChange} />
    </div>
  );
}

export default App;
