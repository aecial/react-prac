import ListGroup from "./components/ListGroup";

function App() {
  let Places = ["Capas", "Concepcion", "Bamban", "San Vicente", "Cristo Rey"];
  let Friends = ["Nonac", "Andrei", "Anne", "Marie", "Joe","Christopher"];
  return (
    <div>
      <ListGroup items={Places} heading="Places" />
      <ListGroup items={Friends} heading="Friends" />
    </div>
  );
}

export default App;
