import ListGroup from "./components/ListGroup";

function App() {
  let Places = ["Capas", "Concepcion", "Bamban", "San Vicente", "Cristo Rey"];
  let Friends = ["Nonac", "Andrei", "Anne", "Marie", "Joe","Christopher"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={Places} heading="Places" onSelectItem={handleSelectItem}/>
      <ListGroup items={Friends} heading="Friends" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
