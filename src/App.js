import React, { Component } from 'react';
import './App.css';
import  Gallery from'./gallery.js';
import { FormGroup , FormControl , InputGroup, Glyphicon ,Button} from 'react-bootstrap';


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
           <InputGroup className ="form ">
               <FormControl
                  type = "text" 
                  placeholder = "Search for a book...." 
                  onChange = {event => this.setState({ query: event.target.value})}  // how to handle blank enter or click
                   onKeyPress={event => {
                      if (event.key === 'Enter') {
                  this.search()  
                }
              }}
            />
                
                <InputGroup.Addon onClick = { () => this.search()} >
                  <Glyphicon glyph ="search" > </Glyphicon >
                </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <div className="Page-two" >
          <Gallery items={this.state.items} />
           </div>
           <div className = "Page-three">
           <div className = "contact" >
         <h3>Do you have suggestions/feedback about this app?</h3>
            <p className = "par">
              Feel free to contact me.
            </p>
             </div>

      <div className="text-center">
      <a className="btn " href="#"><i className="fa fa-twitter fa-lg" id="twitterIcon"></i> Twitter </a>
      <a className="btn " href="https://github.com/HiteshG"><i className="fa fa-github fa-lg" id="githubIcon"></i> GitHub </a>
      <a className="btn " href="https://www.linkedin.com/in/hitesh-gautam-180858136/"><i className="fa fa-linkedin-square fa-lg" id="linkedinIcon"></i> LinkedIn </a>
      <a className="btn " href="https://www.facebook.com/harry.gautam.98"> <i className="fa fa-facebook-official fa-lg" id="facebookIcon"></i>  Facebook </a>
      <a className="btn " href="https://mail.google.com/mail/u/1/#inbox"><i className="fa fa-envelope fa-lg" id="gmailIcon"></i> Gmail </a>
    </div>

       <p className="foot"> Copyrights © Hitesh Gautam  2017 || 
             </p>
           </div>
      </div>
     </div>
          
    );
  }
}

export default App;
