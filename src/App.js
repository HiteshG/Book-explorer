import React, { Component } from 'react';
import './App.css';
import  Gallery from'./gallery.js';
import { FormGroup , FormControl , InputGroup, Glyphicon } from 'react-bootstrap';



class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      query: ' ',
      items: []
    };
  }

  search(){
     const Base_Url ='https://www.googleapis.com/books/v1/volumes?q=' ; // Base url se API call kiya hai  
     fetch(`${Base_Url}${this.state.query}` ,{method: 'GET'})           // Base url + query and method is to GET 
      .then ( response => response.json())                              // response jo aaya hai usse json se connect karo
       .then(json => {                                                  // items ke andar json elements fill kardo 
        let {items} = json;                                             // state ke items ko set karo bus    
         this.setState({items}) 
       });
  }
   

  render() {
    return (
      <div className="Page-one" >
      <div className="App">
        <div className="App-header">
          <img src= "https://png.icons8.com/book-stack/color/1600" className="App-logo" alt="logo" />
          <h2>Book Weavers</h2>
        </div>

        
        <p className="App-intro" >
            Discover new books on Book Weavers. <br />
            Meet your next favorite book. 
         </p>
      
         <FormGroup>
           <InputGroup>
               <FormControl
                  type = "text" 
                  placeholder = "Search for a book...." 
                  onChange = { event => this.setState({ query: event.target.value})}
                  onKeyPress = { event => {
                    if (event.key === 'Enter') {
                      this.search();
                    }
                  }}
                  className="form"   
                  />
                
                <InputGroup.Addon onClick = { () => this.search()} >
                  <button className="btn">Search
                  </button>
                </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <div className="Page-two" >
          <Gallery items={this.state.items} />
           </div>
           <div className = "Page-three">
             <p className="foot"> Copyrights © Hitesh Gautam  2017 || 
             </p>
           </div>
      </div>
     </div>
          
    );
  }
}

export default App;
