import React, {Component} from "react";
import "./Search.css"
import picture from "./Awesome-Anime-Background.jpg"

// function Search() {
//   return (
//     <div className="container align-center">
//       <div className="jumbotron">
//       <header className="name">KANJI-JU</header>
//     <h1>Search</h1>
//     <input type="text" />
//     <button className="anime-search">Search</button>

//     </div>
//     </div>
//   )
// }


export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state= {
      userInput: ""
    }
  }
  
  handleInputChange = (e) => {
    this.setState({userInput: e.target.value})
    console.log(e.target.value)
  }
  handleSearch = () => {
    fetch("https://api.jikan.moe/v3").then(response => {
    console.log(response)
    }
    )
    }
  render() {
    return (
      <div className="container align-center picture">
      <div className="jumbotron">
      <header className="name">KANJI-JU</header>
    <input className="input" type="text" onChange={this.handleInputChange} />
    <button className="anime-search" onClick={this.handleSearch}>Search Anime Collections</button>
    <h1 className="search">Which Show Are You Interested In?</h1>


    </div>
    </div>
    )
  }
}