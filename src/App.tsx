import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
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
        {/* <Alert>
          hello <span>You</span>
        </Alert> */}
      </div>

      <div>
        {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          my button
        </Button>
      </div>
    </>
  );
}

export default App;
