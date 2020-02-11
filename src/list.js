import React, {Component} from "react";
import ListItem from "./listItem";

  class List extends Component{

  render(){
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <ListItem
            key={index}
            item={item.name}
          />
        ))}
      </ul>
    );
  };
}
export default List;