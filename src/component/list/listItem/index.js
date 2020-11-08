import { Component } from "react";
import "./index.css";

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { item, style } = this.props;
    const { isOpen } = this.state;
    const { color } = style;
    const titleStyle = {
      color: color,
      fontSize: `${style.fontSizeTitle}em`,
    };
    const descriptionStyle = {
      color: color,
      fontSize: `${style.fontSizeDescription}em`,
    };
    return (
      <li className="item" isOpen={`${isOpen}`}>
        <div className="itemTitleContainer">
          <h2 className="itemTitle" onClick={this.toggle} style={titleStyle}>
            {item.title}
          </h2>
          {/* <span class="icon" aria-hidden="true"></span> */}
        </div>
        <div className={`itemDescription`} style={descriptionStyle}>
          {item.description}
        </div>
      </li>
    );
  }
}
