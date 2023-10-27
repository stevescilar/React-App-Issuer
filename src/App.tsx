import Alert from "./components/Alert";
import Button from "./components/Button";
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
          hello <span>You</span>
        </Alert>
      </div>

      <div>
        <Button color="primary" onClick={() => console.log("Clicked")}>my button</Button>
      </div>
    </>
  );
}

export default App;
