import React, { Component } from "react";
import logo from "./mulan.jpg";
//import '../bootstrap/dist/css/bootstrap.css';
import "./movieDesc.css";
import Navbar from "./navbar";
import Subscription from "./subscription";

class MovieDesc extends Component {
  state = {
    movieCat: ["Horror", "Action", "Comdey"],
    watched: "",
    Like: "False",
    likeCount: 50,
    subscriptions: [{ id: 1, subs: 159 }],
  };
  handleLikeClick = () => {
    this.setState({ Like: "true" });
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  handleclick = () => {
    this.setState({ watched: "downloading...." });
  };

  render() {
    return (
      // needs breaking of description

      //css customization
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <h2>Adventure Movies- September 2020</h2>
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
                        className="btn btn-primary btn-large"
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
              <button
                className="btn btn-secondary btn-large m-2"
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
