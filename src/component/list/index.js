import { Component } from "react";
import "./index.css";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  toggle = (event) => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    const { title, description } = this.props.list;
    const { isOpened } = this.state;
    // console.log(this.state);
    return (
      <div className="itemContainer" onClick={this.toggle}>
        <div className="itemtitleContainer">
          <h2 className="itemTitle">{title}</h2>
          {/* <input id={`checkbox${index}`} type="checkbox" defaultChecked />ы */}
        </div>
        <div className={`itemDescription ${isOpened ? "open" : ""}`}>
          {description}
        </div>
        <hr />
      </div>
    );
  }
}
