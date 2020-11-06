// import logo from "./logo.svg";
import List from "./component/list";

import "./App.css";

const listMenu = [
  {
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorum, laudantium soluta quae itaque cum voluptatibus eveniet, fuga id laboriosam, ipsum nulla voluptatum aspernatur. Amet sequi ullam animi.",
    title: "Veritatis dolorum.",
  },
  {
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, pariatur.",
    title: "Quam, pariatur.",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat exercitationem cupiditate velit ex ipsa, deserunt, optio reiciendis quis magnam, pariatur repellat hic eveniet eius quae molestiae quas modi nesciunt tempore neque! Eius, distinctio eos! Sit.",
    title: "Fugiat exercitationem cupiditate.",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Lorem, ipsum dolor.</h1>
      {listMenu.map((listItem, index) => {
        return (
          <List key={listItem.title + index} list={listItem} index={index} />
        );
      })}
    </div>
  );
}

export default App;
