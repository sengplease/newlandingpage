"use strict";


class App{
	constructor(){
		
	}
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
}

class Component extends App{
	constructor(){

		super();
	}

	seng(){
		
		this.reRender(`<div align="center">
						<h1><font color="white" font family="courier">Ed's<br> Music<br> Garage</font></h1>
				</div>
			 
			  <br/>
			 
				<div class="logo"><img src="img/photo.jpg"></div>
				<div> 
					<h3><font color="white" font family="courier">Ed's Music Garage helps
					<br>
					   find and listen to your 
					<br>
						favorite Ed Sheeran songs,
					<br>
						it also ables you to make
					<br>
						a playlist or make a 
					<br>
						 certain song your favorite</font></h3>
				</div>
						
					
			 <br>
			 <br>
			 <br>
			
			  <div  align="center">
			  <button type="button" class="btn btn-success"  id="reg"><b>Get Started!</b></button>
			  </div>	
				
				
			`,document.getElementById("app"));
	}
}

let component = new Component();
component.seng();



