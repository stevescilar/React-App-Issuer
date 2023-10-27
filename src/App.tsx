import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nairobi", "Nakuru", "Iten", "Machakos", "Tala"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <hr />
      <div>
        <h2>Alert Component</h2>
        <Alert>
          hello <strike>You</strike>
        </Alert>
      </div>
    </>
  );
}

export default App;
