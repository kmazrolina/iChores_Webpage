import React from 'react';
import './App.css';
import {Circle} from 'react-shapes';
import dots_red from './Pictures/dots-nine-fill-svgrepo-com.svg';
import dots_blue from './Pictures/dots_blue.svg';
import zigzag from './Pictures/shape-zigzag-svgrepo-com.svg';
import  wavy_dash from './Pictures/wavy-dash-svgrepo-com.svg';
import  logo from './Pictures/logo.svg';
import  logo_small from './Pictures/logo_small.svg';
import {render} from "react-dom";
import {delay, motion} from  "framer-motion";
import {useRef} from "react";

import img1 from './Pictures/ichores1.png';
import img2 from './Pictures/ichores2.png';
import SRL_logo from './Pictures/SRL_logo.svg'

//flex-direction: row-reverse;


function App() {
	const about = useRef(null);
	const architecture = useRef(null);
	const collaborators = useRef(null);
	const user_case = useRef(null);

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop - 60,
			behavior: "smooth"
		})
	}
	return (
		<div>
		<div class ='main_bg'>
			
				
				<motion.nav class="navbar background" whileHover={{backgroundColor: "rgba(245,245,245,1)"}}>
					<ul class="nav-list">
						
						<li onClick={() => scrollToSection(about)}>About</li>
						<li onClick={() => scrollToSection(architecture)}> Architecture </li>
						<li onClick={() => scrollToSection(user_case)}> User Case</li>
						<li onClick={() => scrollToSection(collaborators)}> Collaborators </li>
					</ul>

					
				</motion.nav>

				

				<section class="landing">
					<div >
						<div class="logo">
							<img src={logo}  ></img>
						</div>
					</div>
				</section>
				<section ref = {about} class="section">
			
					<motion.div class="box-main" whileHover={{backgroundColor :"rgba(252, 252, 252, 1)"}}>
							<div class="firstHalf">
								<h1 class="text-big">
									About
								</h1>
								<p class="text-small">
								Social service robots are becoming more common, but they need to be designed for people with no experience with robots. Current robots are not easy for non-expert users to use. Our project aims to develop a collaborative interface for domestic service robots that uses language, gestures, and gaze to interact with users. We will conduct user studies to understand how humans naturally collaborate with robots using gestures and gaze. We will test our approach in scenarios involving arranging items on a table and tidying up a room, both in virtual and real-world environments.
								</p>
							</div>
				
					</motion.div>
				</section>
				
				<section ref = {user_case}  class="section">
					<motion.div class="box-main" whileHover={{backgroundColor :"rgba(252, 252, 252, 1)"}}>
						<div class="secondHalf">
							<h1 class="text_center"  id="program">
								User case               
							</h1>
							<img  src = {img1} alt="User case" height = "270" width = "400" id="image"></img>
						</div>
					</motion.div>
				</section>

				<section ref = {architecture}  class="section">
					<motion.div class="box-main" whileHover={{backgroundColor :"rgba(252, 252, 252, 1)"}}>
						<div class="secondHalf" id="architecture">	

							<h1 class="text_center"  id="program">
								Architecture               
							</h1>

							<img src = {img2} alt="Architecture" height = "270" width = "400" id="image"></img>

						</div>
					</motion.div>
				</section>
				
				
			
					<motion.div class = "circle1" animate={{ y:5}} transition={{  type: "tween",duration: 2,repeat: Infinity, repeatType: "reverse", repeatDelay:0 }}>
						
							<Circle  r={200} fill={{color:'rgba(255,255,255,0)'}} stroke={{color:'#E65243'}} strokeWidth={16} />
					</motion.div>
					<motion.div class = "circle3" animate={{ y:-10, x:-8}} transition={{  type: "tween",duration: 2,repeat: Infinity, repeatType: "reverse", repeatDelay:0 }}>
						<Circle  r={80} fill={{color:'#2D93AD'}}  />
					</motion.div>
					
					<motion.div class = "circle2" animate={{ x:3}} transition={{  type: "tween",duration: 2,repeat: Infinity, repeatType: "reverse", repeatDelay:0 }}>
						<Circle  r={100} fill={{color:'rgba(255,255,255,0)'}} stroke={{color:'#000000'}} strokeWidth={30} />
						
					</motion.div>
					<motion.div class = "circle4" animate={{ y: -3, x:-5}} transition={{  type: "tween",duration: 2,repeat: Infinity, repeatType: "reverse", repeatDelay:0 }}>
						<Circle  r={200} fill={{color:'#28869e'}}  />

					</motion.div>

					<motion.div class = "wavy_dash" animate={{ y: 10}} transition={{  type: "tween",duration: 2,repeat: Infinity, repeatType: "reverse", repeatDelay:0 }}>
						<img src={wavy_dash} alt="k"  height={"70%"} width={"70%"} ></img>
					</motion.div>
					<motion.div class = "dots1" animate={{ y: 19}} transition={{  type: "tween",duration: 5,repeat: Infinity, repeatType: "reverse", repeatDelay:0 }}>
						<img src={dots_red} alt="k" height={"50%"} width={"50%"}></img>
					</motion.div>

					<motion.div class = "dots2" animate={{ y: 30, x: 2}} transition={{  type: "tween",duration: 10,repeat: Infinity, repeatType: "reverse", repeatDelay:0 }}>
						<img src={dots_blue} alt="k" height={"70%"} width={"70%"}></img>
					</motion.div>

				<section ref = {collaborators}  class="section">
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
			


			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Collaborators
						</h1>
						<div align-items="center">
							<button class="button">
							
								<a href="https://en.wikipedia.org/wiki/Prague" class = "button">PRAGUE LAB</a> 
							</button>
							<button class="button">
								<a href="https://en.wikipedia.org/wiki/Bratislava" class = "button">BRATISLAVA LAB</a>
							</button>
							
							<button class="button">
								<img   href="https://en.uj.edu.pl/" src = {SRL_logo} alt="YouTube" height = "100" width = "130" id="image"></img>
							</button>
						</div>
						
						
					</div>
					</div>
				</section>
				
				<footer className="footer" >
					<p className="text-footer">
						jakis footer, moze logo uj czy cos
					</p>
				</footer>

				
				
			</div>
			</div>
		
		
	)
}

export default App
