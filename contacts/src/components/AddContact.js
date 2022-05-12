
import React, { Component } from 'react'

export default class addContact extends Component {

  state = {
    name : "",
    email : "",
    mobile : "",
  };

  add = (e) =>{
    e.preventDefault();
    if(this.state.name==="" && this.state.email==="" && this.state.mobile===""){
      alert("This field are required !!!");
      return;
    }
    this.props.addContactHandelermain(this.state)
    console.log(this.state);
    this.setState({name:"", email:"",mobile:""});
  }

 
  render() {
    return (
      <div className="container pt-3">
        <form action="" method="post" onSubmit={this.add}>
          
         <div className="mb-3">
          <label htmlFor="name" className="form-label"><h6 className="mb-0">Contact Name</h6></label>
          <input type="text" className="form-control" 
          id="name" placeholder="Enter contacts name"
          onChange={(e) => {
            this.setState({name: e.target.value})
            // console.log(e.target.value)
            // console.log(e)
          }}
          value={this.state.name}
          />
         </div>
          <div className="mb-3">
          <label htmlFor="email" className="form-label"><h6 className="mb-0">Contact Email</h6></label>
          <input type="email" className="form-control" 
          id="email" placeholder="Enter contacts email"
          onChange={(e) => {
            this.setState({email: e.target.value})
          }}
          value={this.state.email}/>
          </div>
          <div className="mb-3">
          <label htmlFor="mobile" className="form-label"><h6 className="mb-0">Contact Mobile</h6></label>
          <input type="number" className="form-control"
           id="mobile" placeholder="Enter contacts mobile number"
           onChange={(e) => {
            this.setState({mobile: e.target.value})
          }}
          value={this.state.mobile}
           />
          </div>
          <button type="submit" className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
