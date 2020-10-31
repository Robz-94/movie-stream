import React, { Component } from "react";
import { getmovies } from "../services/movieArray";
const Table = () => {
  return (
    <table className="table">
      <thead>
        <th>title</th>
        <th>genre</th>
        <th>NUmberInStock</th>
        <th>DailyRentalRate</th>
        <th>PublishedDate</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
        </tr>
        <tr>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
        </tr>
        <tr>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
        </tr>
        <tr>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
        </tr>
        <tr>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
