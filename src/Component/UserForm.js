import React, { Component } from 'react';

class UserForm extends Component {

  state = {
    name: '',
    image: ''
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    }, ()=>console.log(this.state))
  }


  render() {
    return(
      <form onSubmit={(event)=>this.props.handleSubmit(event, this.state)}>
      <input name='name' value={this.state.name} placeholder='name...' onChange={(event)=>this.handleChange(event)}/>
      <input name='image' value={this.state.image} placeholder='image url...' onChange={(event)=>this.handleChange(event)}/>
      <button>submit</button>
      </form>
    )
  }

}

export default UserForm
