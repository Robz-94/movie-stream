import React, { Component } from 'react';
//import '../bootstrap/dist/css/bootstrap.css';
import './movieDesc.css'
class MovieDesc extends Component {
    state = { 
        movieCat:['Horror','Action','Comdey'],
        watched:""
        
     }
     
     handleclick=()=>{
         
        this.setState({watched: "downloading...."});

     }
    
    
    render() { 
        
        return ( 
      // needs breaking of description
      //picture link not working
      //css customization 
            
            <table  className="movieTable">
                <thead  classname="header">
                  <h2>Adventure Movies- September 2020</h2>
                </thead>
                <tbody>
                    <tr  >
               <td><div><img src="src/components/mulan.jpg" alt="mulan poster" /></div>
                        </td>
                        
                        <td >
                            <table className="movieDetail">
                                <tbody >
                                    
                                    <tr > <h5>Movie Detail</h5></tr>
                                   
                                    <tr > <p> dramatic
                                            adventure
                                         intense watchout</p></tr>
                                    <tr >
                                    <button  onClick={this.handleclick}className="btn btn-primary btn-large">watch</button>
                                    </tr>
                                    <tr>
                                        {this.state.watched}
                                    </tr>
                                    
                                </tbody>
                                
                                </table>
                        </td>
                    </tr>
                    <tr>likes
                        <button>likes
                        
                        </button>
                    </tr>
                </tbody>
            </table>
         );
    }
}
 
export default MovieDesc;