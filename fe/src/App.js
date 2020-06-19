import axios from "axios";
import React, { Component } from "react";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }
  componentWillMount() {
    axios.get("http://localhost:3000/result").then((data) => {
      this.setState({
        result: data.data,
      });
    });
  }

  render() {
    console.log(this.state.result);
    const { result } = this.state;
    const candidates = [
      {
        name: "Nam",
        number: result[0],
      },
      {
        name: "Hiếu",
        number: result[1],
      },
      ,
      {
        name: "Đức",
        number: result[2],
      },
    ];
    candidates.sort((a, b) => (a.number > b.number ? -1 : 1));

    const showRanking = () => {
      return candidates.map((member, i) => {
        return (
          <tbody key={i}>
            <tr>
              <th scope="row">{(i += 1)}</th>
              <td>{member.name}</td>
              <td>{member.number}</td>
            </tr>
          </tbody>
        );
      });
    };
    return (
      <div className="ranking">
        <div className="labelRanking">Result voting</div>
        <div className="playerRanking1">
          <img
            alt="top 1"
            src="https://images.vexels.com/media/users/3/127647/isolated/preview/2e42210587bfc22de5e8cf9dc461b3c4-first-rank-badge-olympic-by-vexels.png"
            className="imgNumber1"
          ></img>
          <h1 className="playName1">{candidates[0].name}</h1>
        </div>

        <table className="table table-hover table-dark playerRanking">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Number vote</th>
            </tr>
          </thead>
          {showRanking()}
        </table>
      </div>
    );
  }
}
export default App;
