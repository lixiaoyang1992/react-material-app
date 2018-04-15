import * as React from "react";
import { Button } from "material-ui";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
