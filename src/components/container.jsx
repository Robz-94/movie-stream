import React, { Component } from "react";
import Table from "./table";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import { getmovies } from "../services/movieArray";
class Container extends Component {
  state = {
    size: 2,
    currentPage: 1,
    movies: getmovies(),
    favs: 10,
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleExpandClick = (Liked) => {
    this.setState({ favs: Liked });
    alert(Liked);
  };

  render() {
    const { size, currentPage, movies } = this.state;

    const Allmovies = paginate(movies, currentPage, size);

    return (
      <React.Fragment>
        <Pagination
          pageCount={7}
          pageSize={size}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
        <table className="table">
          <thead>
            <th>Title</th>
            <th>Category</th>
            <th>Net Budget</th>
            <th>Income</th>
            <th>Roten Tomato</th>
            <th>Publication Date</th>
          </thead>
          <tbody>
            {Allmovies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.category.name}</td>
                <td>{movie.Expense}</td>
                <td>{movie.Income}</td>
                <td>{movie.RotenTomato}</td>
                <td>{movie.PublishedDate}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.handleExpandClick(movie.Like)}
                  >
                    ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Container;
