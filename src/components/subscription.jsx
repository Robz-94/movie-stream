import React, { Component } from 'react';
class Subscription extends Component {
    state = { 
        emailIsValid:1,
        subs: 10,
        input: {},
        email:''
     }
    //validates the email and password null content
     OnSubmit=()=>{
                    let text= this.state.email
            console.log(text);
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(text) === false) {
              alert("Email is Not Correct");
              this.setState({ email: text })
              return false;
            }
            else {
              this.setState({ email: text })
              if( document.getElementById("ID").value.length==0){
                alert("password is empty")                
        }
        else
        {
            alert("Sucessfully Subscribed")
        }
            
            }
        
     }
     changeText=(event)=>{
        this.setState(
            {email : event.target.value}
        );
    }    
    render() {        

        return ( 
            <div>
            {this.props.children}
            <form className="Login">
                <p>                    
                    Email Adress <input type="text" placeholder="Email ID" onChange = {this.changeText} value={this.state.email} />
                     Password : <input type="password" id="ID" name="password"></input>
                    <button className="btn btn-secondary btn-large m-2"value="Submit" onClick={this.OnSubmit}>Subscribe</button>
                </p>
        
            </form>
</div>
         );
    }
}
 
export default Subscription;