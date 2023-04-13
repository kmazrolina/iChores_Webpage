import React from 'react';
import './App.css';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

import img1 from './ichores1.png'
import img2 from './ichores2.png'



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

			
			
			<section class="section">
				<div class="section-left">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							User case               
						</h1>

						<img src = {img1} alt="User case" height = "200" width = "300">
							
						</img>

						<img src = {img2} alt="Architecture" height = "200" width = "300">
							
						</img>
					
					</div>
				</div>
			</section>

			
			
<<<<<<< HEAD
=======
			<div class = "circle">
				<Circle  r={200} fill={{color:'rgba(255,255,255,0)'}} stroke={{color:'#E65243'}} strokeWidth={16} />
			</div>
>>>>>>> dd066fa2248baffa990a6b360ccdc6df4d5bcf53

			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Collaborators
						</h1>
						<p class="text-small">
						
							linki
						</p>
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
