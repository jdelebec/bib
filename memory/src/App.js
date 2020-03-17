import React from 'react';
import logo from './logo.svg';
import './App.css';

const $ = window.$;

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<title>My first styled page</title>
        <p>
          List of Bib restaurant scrap from michelin website
        </p>
        <a
          className="michelin_link"
          href="https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/"
          target="_blank"
          rel="noopener noreferrer"
        >
          discover website
        </a>
		 </header>
	  <body className="body">
		<p>
          List of restaurant :
		 <div id="list_rest"></div>		 
        </p>
		<table>
			<tr>
				<th>name</th>
				<th>phone</th>
				<th>adress</th>
				<th>link</th>
			</tr>
		</table>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script type="text/javascript">
			jQuery(document).ready(function($) {
				$.ajax({
					url:'list_rest.json',
					dataType:'json',
					success:function(data) {
						$(data.rest).each(function(index,value) {
							 var record= '<tr><td>'+(index+1)+
							 '</td><td>'+value.name+'</td><td>'+
							 value.phone+'</td><td>'+value.adress+
							 '</td><td>'+value.link+'</td><td>'
							$('table').append(record);
					});
					}
			})}
		});
		</script>
		</body>
	</div> 
  );
}

export default App;

