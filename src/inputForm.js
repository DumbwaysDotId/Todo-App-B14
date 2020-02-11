import React, {Component} from "react";

class InputForm extends Component{
  render() {
    return (
      <form 
      onSubmit={this.props.newItemSubmitHandler}
      className="todoInput">
        <input
          className="input"
          type="text"
          onChange={this.props.handleItemInput}
          value={this.props.pendingItem}
          placeholder="Add an item"
      />
      <button type="submit" name="submit" value="submit">
        add
      </button>
    </form>
  );
};
}
export default InputForm;