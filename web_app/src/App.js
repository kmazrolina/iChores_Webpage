import React from 'react';
import './App.css';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

import img1 from './ichores1.png'
import img2 from './ichores2.png'
import img3 from './github.png'
import img4 from './youtube.png'
import img5 from './SRL_logo.svg'

//flex-direction: row-reverse;


function App() {
	return (
		<div>
			
			<nav class="navbar background">
				<ul class="nav-list">
					
					<li><a href="About">About</a></li>
					<li><a href="Architecture">Architecture</a></li>
					<li><a href='Collaborators'>Collaborators</a></li>
				</ul>

				
			</nav>
			<section class="section">
				<div >
						<h1 class="title">
							iChores
						</h1>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							About
						</h1>
						<p class="text-small">
						Social service robots are becoming more common, but they need to be designed for people with no experience with robots. Current robots are not easy for non-expert users to use. Our project aims to develop a collaborative interface for domestic service robots that uses language, gestures, and gaze to interact with users. We will conduct user studies to understand how humans naturally collaborate with robots using gestures and gaze. We will test our approach in scenarios involving arranging items on a table and tidying up a room, both in virtual and real-world environments.
						</p>
					</div>
				</div>
			</section>


			
		{/*	<section class="section">
				<div class="section-left">
					<div class="secondHalf flex" >

						<h1 class="text-big padding_usercase"  id="program">
							User case               
						</h1>

						<span></span>

						<h1 class="text-big padding_architecture"  id="program">
							Architecture               
						</h1>

					</div>

					

					<div class="secondHalf flex" id="architecture">	

						
						<img class="padding_image1" src = {img1} alt="User case" height = "270" width = "400" id="image">
							
						</img>
						
						<span></span>

						<img class="padding_image2" src = {img2} alt="Architecture" height = "270" width = "400" id="image">
							
						</img>
					</div>	
					
				</div>
	</section> */}



<section class="section">
				<div class="section-left flex">
					<div class="secondHalf" >

						<h1 class="text_center"  id="program">
							User case               
						</h1>

						

						<img  src = {img1} alt="User case" height = "270" width = "400" id="image">
							
						</img>

						

					</div>

					<span></span>

					<div class="secondHalf" id="architecture">	

						
						<h1 class="text_center"  id="program">
							Architecture               
						</h1>
						
						

						<img src = {img2} alt="Architecture" height = "270" width = "400" id="image">
							
						</img>
					</div>	
					
				</div>
				</section>		
			


			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Collaborators
						</h1>
						
						
						
						
						<a href="https://en.wikipedia.org/wiki/Prague" class = "button2">
							<p>PRAGUE</p>LAB</a> 
						
							
						
						
						
						
						<a href="https://en.wikipedia.org/wiki/Bratislava" class = "button2">
							<p>BRATISLAVA</p> LAB</a>
					
						
						<a href="https://en.uj.edu.pl/" class = "button">
							<img src = {img5} alt="YouTube" height = "100" width = "130" id="image"></img></a>
						
					</div>
				</div>
			</section>
			
			<footer className="footer">
				<p className="text-footer">
					jakis footer, moze logo uj czy cos
				</p>
			</footer>
			
		</div>
		
		
	)
}

export default App
