import { Component } from "react";
import "./style.css";

class Fakes extends Component {
  constructor() {
    super();
    this.state = {
      a: [],
      tab: [],
    };
  }

  componentDidMount() {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
      .then((res) => {
        this.setState({
          a: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  rend = () => {
    let pr = prompt("Enter Section : ");
    let data = this.state.a.filter((val, ind) => {
      if (val["category"] == pr) {
        return (
          <>
            {/* {console.log(val)} */}

            {val}
          </>
        );
      }
    });

    this.setState({
      tab: data,
    });
  };

  render() {
    let result = this.state.tab.map((val, ind) => {
      return (
        <>
          <tr key={ind}>
            <td>{val["id"]}</td>
            <td>{val["title"]}</td>
            <td>{val["description"]}</td>
            <td>{val["category"]}</td>
            <td>{val["price"]}</td>
            <td>
              <img src={val["image"]} alt="" width={200} />
            </td>
            <td>
              <button className="b">{val["rating"]["rate"]}</button>
            </td>
            <td>
              <button className="b">{val["rating"]["count"]}</button>
            </td>
          </tr>

          {console.log(val)}
        </>
      );
    });
    return (
      <>
        <button onClick={this.rend} className="btn">Click_ME</button>
        <table>{result}</table>
      </>
    );
  }
}

export default Fakes;
