import React, {Component} from 'react';
import './App.css';
import InputForm from "./inputForm";
import List from "./list";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list : [],
      pendingItem: ""
    };
  }


handleItemInput = e => {
  this.setState({
    pendingItem: e.target.value
  })
}

newItemSubmitHandler = e => {
  e.preventDefault();
  this.setState({
    list: [
      {
        name: this.state.pendingItem,
      },
      ...this.state.list
    ],
    pendingItem: ""
  });
};

  render(){
    return (
      <div className="App-header">
        <List list={this.state.list} />

        <InputForm
          className="input"
          type="text"
          handleItemInput={this.handleItemInput}
          newItemSubmitHandler={this.newItemSubmitHandler}
          pendingItem={this.state.pendingItem}
          placeholder="Add an item"
        />

      </div>
    );
  }
}


export default App;
