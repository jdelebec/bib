import React, { Component } from 'react';





class restaurant extends Component {
	constructor()
	{
		super();
		this.state = {
			data:[
			{
				id:1,
				name:'john'
			}
			]
	}
	}
	render() 
	{
		return(
		<div>
		{
			this.state.data.map((dynamicData,i)=>
			<p>{dynamicData.name}</p>
			)
		}
		</div>   
		)
	}
}
export default restaurant;
