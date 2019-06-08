// //SearchField Component: has state with search field input 

// import React, { Component } from 'react';
// import GifCard from './GifCard'; 

// class SearchField extends Component {
//     state = {
//         search: 'Default text'
//     }; 

//     //handleChange takes user input & updates the value of the state 
//     //function can be used to change the state 
//     handleChange = (event) => {
//         this.setState({
//             search: event.target.value 
//         }); 
//     }; 

//     //upon user submit, event handle shows the reults of the search 
//     handleSubmit = event => {
//         //disables the page from reloading 
//         event.preventDefault(); 
//         this.props.handleFormSubmit(this.state.search); 
//     }

//     render(){
//         return (
//             <div className="Search_Bar"> 
//             {/* upon user submit, this line calls the handleSubmit event handler */}
//                 <form onSubmit={this.handleSubmit} classname="Search_Form"> 
//                     <div className="Search_Feild">
//                         <label htmlFor="Search_Gif">Gif Search</label>
//                         <input onChange={this.handleChange} name='Search_Gif'
//                         type="text" value={this.state.search}/>
//                     </div>
//             </form>
//             </div>
//         )
//     }
// }

// export default SearchField; 

import React from 'react';

class SearchBar extends React.Component {
    onInputChange(term) {
        this.props.onTermChange(term);
    }

    // onInputChange(trending){
    //     this.props.onRandomChange(trending)
    // }

    render() {
        return (
            <div className="search">
                <input placeholder="Enter text to search for gifs!"  onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;