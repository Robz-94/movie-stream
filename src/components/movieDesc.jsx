import React, { Component } from "react";
import logo from "./mulan.jpg";
import "./movieDesc.css";
import Navbar from "./navbar";
import Subscription from "./subscription";
import Container from "./container";

class MovieDesc extends Component {
  state = {
    movieCats: ["Adventure", "Drama", "Horror", "Action", "Comdey"],
    watched: "",
    Like: "False",
    likeCount: 60,
    subscriptions: [{ id: 1, subs: 159 }],
  };
  constructor() {
    super();
  }
  handleLikeClick = () => {
    let Like = this.state.Like;
    if (this.state.Like == "False") {
      this.setState({ Like: "True" });
      this.setState({ likeCount: this.state.likeCount + 1 });
    } else {
      this.setState({ Like: "False" });
      this.setState({ likeCount: this.state.likeCount - 1 });
    }
  };
  handleSub = () => {};
  handleclick = () => {
    this.setState({ watched: "downloading...." });
  };
  currYear = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var CurrentDate =
      monthNames[new Date().getMonth()] + "  " + new Date().getFullYear();
    return CurrentDate;
  };
  render() {
    return (
      // needs breaking of description

      //css customization

      <div>
        <div className="navbar">
          <Navbar />
        </div>

        <h2>
          {this.state.movieCats[0]}Movies- {this.currYear()}
        </h2>
        {/*pagination placed --justified center*/}

        <table className="movieTable">
          <thead classname="header"></thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <img src={logo} alt="mulan poster" height="500" />
                </div>
              </td>

              <td>
                <table className="movieDetail">
                  <tbody>
                    <tr className="tabrule">
                      {" "}
                      <h1>Movie Detail</h1>
                    </tr>

                    <tr className="tabrule">
                      {" "}
                      <h3>
                        {" "}
                        dramatic adventure intense watchout and now are back
                        with 2020's one of the best watched movies in the
                        season.Enjoy!!!{" "}
                      </h3>
                    </tr>
                    <tr>
                      <button
                        onClick={this.handleclick}
                        className="btn btn-primary btn-sm m-2"
                      >
                        watch
                      </button>
                    </tr>
                    <tr>{this.state.watched}</tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              {this.state.likeCount}
              <i class="fa fa-heart-o" aria-hidden="true"></i>
              <button
                className="btn btn-secondary btn-sm m-2"
                onClick={this.handleLikeClick}
              >
                likes
              </button>
            </tr>
          </tbody>
        </table>
        <div className="subed">
          {this.state.subscriptions.map((subscription) => (
            <Subscription
              key={subscription.id}
              subs={subscription.subs}
              onUpdate={this.handlesubs}
            >
              <nav class="navbar navbar-light bg-light">
                <span class="navbar-text">
                  <h3> Active subscriptions: {subscription.subs}</h3>
                </span>
              </nav>
            </Subscription>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieDesc;
