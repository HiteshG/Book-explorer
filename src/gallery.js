import React, { Component } from 'react';


class Gallery extends Component {

	render() {
		let alternate = "http://www.almguide.com/wp-content/themes/K-Theme/assets/images/No-image-full.jpg" ;
		return(
		<div> {
			this.props.items.map((item,index) => {
				let {title , imageLinks , infoLinks , description } = item.volumeInfo;
				return(
					<div key = {index} className = "book" >
					<a href = {infoLinks} target="_blank" /> 
					<img src = {imageLinks !== undefined ? imageLinks.thumbnail : alternate }
				     alt =" book image"
				     className="book-img"
				     />
				     <div className="book-text" >
					   {title} 
					   </div>
					   <div className ="des" >
                          <p> {description} </p>
					    </div>
					   </div>
					)
			})

		}</div>
	    
      	);
	 }
}


export default Gallery ;