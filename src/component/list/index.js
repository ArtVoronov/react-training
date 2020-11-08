import { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import ListItem from "./listItem";

export default class List extends Component {
  render() {
    const { styles, list, listName } = this.props;
    const { color } = styles;
    return (
      <div className="listContainer">
        <h1 className="listTitleContainer" style={{ color }}>
          {listName}
        </h1>
        <ul>
          {list.map((listItem, index) => (
            <ListItem
              key={listItem.description + String(index)}
              item={listItem}
              style={styles}
            />
          ))}
        </ul>
      </div>
    );
  }
}

List.defaultProps = {
  listName: "Lorem, ipsum dolor.",
};
