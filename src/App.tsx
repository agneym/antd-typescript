import React, { Component } from "react";
import { Button } from 'antd';


class App extends Component<{}, {}> {
  public render() {
    return (
      <main className="container">
        <Button type="primary">Primary</Button>
      </main>
    )
  }
}

export default App;