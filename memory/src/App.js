import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import data from "./list_rest";


class App extends Component{
	
	render() 
	{
		return(
			<div className="App">
				<header className="App-header">
					<title>My first styled page</title>
					<p>
						List of Bib restaurant scrap from michelin website
					</p>				
				</header>
				
					<body className="body">
					<a
						className="michelin_link"
						href="https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/"
						target="_blank"
						rel="noopener noreferrer"
						>
						Discover michelin website
					</a>
					<p>																		
					</p>
					<div>
					<table className="table_header">
					    <tr>
								<th>Restaurant List</th>
								
						</tr>
					</table>
					{data.map((detail,index)=>{
						return <table className="table">	
							  <tr>
								<td className="row">{detail.name}</td>
								<td className="row">{detail.phone}</td>
								<td className="row">{detail.address}</td>
								<td className="row">
								<a
								className="link"
								href={detail.link}
								target="_blank"
								rel="noopener noreferrer"
								>
						discover the restaurant website
					</a></td>
							  </tr>						 
							</table>
							
					})}
					</div>
					<div>
					</div>   
		
			
				</body>
		</div> 
		
	)}
}

export default App;

