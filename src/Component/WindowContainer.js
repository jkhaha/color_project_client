import React, { Component } from 'react';
import UserForm from "./UserForm"

class WindowContainer extends Component {
  state = {
    name: '',
    image: `https://brandinginasia.com/wp-content/uploads/2017/03/Anne-Hathaway-Korean-Cosmetics-Branding-in-Asia.jpg`
  }

  componentDidMount() {
    this.fetchUsers()
    this.findUserTone()
  }

  findUserTone() {
    fetch('https://www.betafaceapi.com/api/v2/media', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "api_key": "d45fd466-51e2-4701-8da8-04351c872236",
        "file_uri": `${this.state.image}`,
        "detection_flags": "extended",
        "recognize_targets": [
            "all@mynamespace"
          ],
        "original_filename": "sample.png"
      })
    })
    .then(res => res.json())
    // .then(data=> console.log(data.media.faces[0].tags))
    .then(data => this.findColorToneTag(data.media.faces[0].tags))
  }

  // console.log(data.media.faces[0].tags

  findColorToneTag(tags) {
    const tone = tags.find((tag) => {
      return tag.name === 'color skin'
    })
    console.log(tone)
  }

  fetchUsers() {
    fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(console.log)
    }

    handleSubmit=(event, obj)=>{
      event.preventDefault()
      this.setState({
        name: obj.name,
        image: obj.image
      }, ()=>console.log(this.state.image))
    }


  render() {
    this.findUserTone()
    return(
      <UserForm handleSubmit={this.handleSubmit}/>
    )
  }
}

export default WindowContainer
