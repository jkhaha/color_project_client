import React, { Component } from 'react';

class Test extends Component {

  componentDidMount() {
    fetch('https://www.betafaceapi.com/api/v2/media', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "api_key": "d45fd466-51e2-4701-8da8-04351c872236",
        "file_uri": "https://brandinginasia.com/wp-content/uploads/2017/03/Anne-Hathaway-Korean-Cosmetics-Branding-in-Asia.jpg",
        "detection_flags": "extended",
        "recognize_targets": [
            "all@mynamespace"
          ],
        "original_filename": "sample.png"
      })
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return(
      <h1> test </h1>
    )
  }
}

export default Test
