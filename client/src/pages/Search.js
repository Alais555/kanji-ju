import React, { Component } from "react";

import "./Search.css"

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: { image_url: "", title: "", url: "", score: 0 },
      userInput: ""
    }
  }

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value })
    console.log(e.target.value)
  }
  handleSearch = () => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${this.state.userInput}`, {
      METHOD: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ show: data.results[0] })
        console.log(data.results)
      })

      .catch(error => console.log('ERROR'))

  }

  render() {
    return (
    

      <div className="container picture">
        <div className="jumbotron bg-transparent">
          <header className="name">KANJI-JU</header>

          <button className="anime-search" onClick={this.handleSearch}>Search Anime Collections</button>
          <input className="input" type="text" onChange={this.handleInputChange} />

          {/* <h1 className="search">Which Show Are You Interested In?</h1> this code has to do with page rendering */}
          <div className="topage">
            {this.state.show.title ? (<div><h1> {this.state.show.title} </h1>
              <img className="fit-picture"
                src={this.state.show.image_url}
                alt={this.state.show.title}></img>
              <a href={this.state.show.url}> {this.state.show.url} </a></div>) : <p> No Search Results</p>


            }
          </div>
        </div>

      </div>
     


      // //       // function Users() {
      // //       //   const [users, setUsers] = useState([]);
      // //       //   useEffect(() => {
      // //       //     // ajax on component load the first time
      // //       //     axios.get("https://randomuser.me/api?results=10").then((res) => {
      // //       //       setUsers(res.data.results);
      // //       //     });
      // //       //   }, []);
      // //       //   return (
      // //       //     <div>
      // //       //       <header>
      // //       //         <h1>Users</h1>
      // //       //       </header>
      // //       //       <table>
      // //       //         <thead>
      // //       //           <tr>
      // //       //             <th>First</th>
      // //       //             <th>Last</th>
      // //       //             <th>Email</th>
      // //       //             <th>Country</th>
      // //       //           </tr>
      // //       //         </thead>
      // //       //         <tbody>
      // //       //           {users.map((user) => (
      // //       //             <TableRow user={user} />
      // //       //           ))}
      // //       //         </tbody>
      // //       //       </table>
      // //       //     </div>
      // //       //   );
      // //       // }
    )
  }
}


//  import React, { Component } from "react";
//  import axios from "axios"
// import { set } from "mongoose";

//  function Users() {
//    const [users, setUsers] = useState([]);
//    useEffect(() => {
//       axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.state.userInput}`).then((res) => {
//         set.Users(res.data.results);
//       });
//    }
//    )};

//    return (
//     <div>
//       <header>
//         <h1>Anime</h1>
//       </header>
//       <table>
//         <thead>
//           <tr>
//             <th>First</th>
//             <th>Last</th>
//           </tr>
//         </thead>
//         <tbody>
//         {users.map((user) => (
//              console.log(user.tile),
//             console.log(user.image_url)
//           ))}


//         </tbody>
//       </table>
//     </div>
//   );



// import React, { useEffect, useState } from 'react';
// import './Search.css'
// const users = Search;
// function Search() {
//   const [searchState, setSearchState] = useState ({
//     loading: false,
//     repos: null
//   });

//   function handleSearch() {
//     setSearchState({loading: true});
//     const apiUrl = `https://api.jikan.moe/v3/search/anime?q=${this.state.userInput}`;
//     fetch(apiUrl)
//     .then((res) => res.json())
//     .then((repos) =>{
//       setSearchState({ loading: false, repos: repos });
//     });
//   }

//   function handleInputChange() {

//   }

//          return (
//           <div className="container picture">
//             <div className="jumbotron bg-transparent">
//                <header className="name">KANJI-JU</header>

//                <button className="anime-search" onClick={handleSearch}>Search Anime Collections</button>
//               <input className="input" type="text" onChange={handleInputChange} />

//               {/* <h1 className="search">Which Show Are You Interested In?</h1> this code has to do with page rendering */} 
//               <div className="topage">
//                 <h1> Aaron</h1>
//                  <img className="fit-picture"
//                   src="https://via.placeholder.com/150"
//                   alt="placeholder photo"></img>

//                   {users.map((user) => (
//                       console.log(user.tile),
//                       console.log(user.image_url)
//                          ))}


//               </div>
//             </div>

//           </div>

//            )}
//                 export default Search;