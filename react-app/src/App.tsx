import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import { flushSync } from "react-dom";

function App() {
  const [alertVisible, setAlertVisibile] =useState(false);
  let Places = ["Capas", "Concepcion", "Bamban", "San Vicente", "Cristo Rey"];
  let Friends = ["Nonac", "Andrei", "Anne", "Marie", "Joe","Christopher"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibile(false)}>
        Alert
      </Alert>}
      <Button  onClick={() => setAlertVisibile(true)}>
        Submit
      </Button>
      <ListGroup items={Places} heading="Places" onSelectItem={handleSelectItem}/>
      <ListGroup items={Friends} heading="Friends" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
