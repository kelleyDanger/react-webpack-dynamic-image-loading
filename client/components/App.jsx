import React from 'react';
import path from 'path';

import Decals from 'images/decals.js';


class App extends React.Component {
		constructor() {
			super();
			this.state = {
				imgPack: 'Animals'
			}
		}



	onChange(event) {
		console.log(event.target.value);

		this.setState({imgPack: event.target.value});

	}

  render() {
  	console.log("IMG PACK: " + this.props.imgPack);
  	var pathToImg = require("images/"+this.props.imgPack+"/__Butterfly.png");
  	
  	//const url = "images/" + this.props.imgPack;
  	//console.log(url);
  	//const urlPath = path(url);
  	//const AnimalsPath = require.context("images", true);
  	//console.log(AnimalsPath.keys());
//
  	//AnimalsPath.keys().forEach(function(animal) {
		//	console.log("ANIMAL: " + animal);		
		//})
//

    return (
    	<div>
	     <select onChange={this.onChange.bind(this)}>
				  <option value="Animals" defaultValue>Animals</option>
				  <option value="Emoticons">Emoticons</option>
				  <option value="Minimen">Minimen</option>
				  <option value="SacredGeometry">Sacred Geometry</option>
				</select>

				<img src={pathToImg} />
				<DecalList imgPack={this.state.imgPack} />
			</div>
		);
  }
}

class DecalList extends React.Component {
	render() {
		
		var decals = Decals[this.props.imgPack];
		console.log(decals);

		const decalList = decals.map((decal, i) =>
			<img src={`./client/public/assets/images/${this.props.imgPack}/${decal}`} key={i} />
		)
		return(
			<div>{decalList}</div>
		)
	}
}

export default App;