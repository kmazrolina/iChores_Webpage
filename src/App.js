import React from 'react';
import Index from "minimum-window-size";
import './App.css';
import {Circle, Rectangle} from 'react-shapes';
import dots_red from './Pictures/dots-nine-fill-svgrepo-com.svg';
import dots_blue from './Pictures/dots_blue.svg';
import  wavy_dash from './Pictures/wavy-dash-svgrepo-com.svg';
import  logo from './Pictures/logo.svg';
import {render} from "react-dom";
import {delay, motion} from  "framer-motion";
import {useRef} from "react";

import user_case_svg from './Pictures/user_case.svg';
import architecture_svg from './Pictures/architecture.svg';
import SRL_logo from './Pictures/SRL_logo.svg'
import CIIRCC_logo from './Pictures/CIIRCC_logo.svg'
import ACIN_logo from './Pictures/ACIN_logo.svg'
import TU_logo from './Pictures/TU_logo.svg'
import INCOG_logo from './Pictures/INCOG_logo.svg'
import UJ_logo from './Pictures/UJ_logo_ostatnieb.svg'


function App() {
	const about = useRef(null);
	const architecture = useRef(null);
	const collaborators = useRef(null);
	const user_case = useRef(null);
	const contact = useRef(null);

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop - 70,
			behavior: "smooth"
		})
	}
	return (
		<Index width={350} height={20}>
			<div>
				<motion.nav class="navbar background" whileHover={{backgroundColor: "rgba(245,245,245,1)"}}>
					
					<ul class="nav-list">
						
						<li onClick={() => scrollToSection(about)}>About</li>
						<li onClick={() => scrollToSection(user_case)}> User&nbsp;Case</li>
						<li onClick={() => scrollToSection(architecture)}> Architecture </li>
						<li onClick={() => scrollToSection(collaborators)}> Collaborators </li>
						<li onClick={() => scrollToSection(contact)}> Contact</li>
					</ul>
				

						
				</motion.nav>
				<div class="main_bg" >
					
					
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
				
				
					<div class="upper-section">
						


						<section class="landing">
							<div >
								<div class="center" >
									<img class="logo" src={logo}  ></img>
								</div>
							</div>
						</section>
						<section ref = {about} class="section">
					
							<motion.div class="box-main" whileHover={{backgroundColor :"rgba(252, 252, 252, 1)"}}>
										<h1 class="text-big">About</h1>
										<p class="text-small">
										Social service robots are becoming more common, but&nbsp;they need to&nbsp;be designed for&nbsp;people with no&nbsp;experience &nbsp;in robotics. Current robots are not&nbsp;easy for&nbsp;non-expert users. Our&nbsp;project aims to&nbsp;develop a&nbsp;collaborative interface for&nbsp;domestic service robots that uses language, gestures, and&nbsp;gaze to&nbsp;interact with users. We will conduct user studies to&nbsp;understand how&nbsp;humans naturally collaborate with&nbsp;robots using gestures and&nbsp;gaze. We&nbsp;will test our&nbsp;approach in&nbsp;scenarios involving arranging items on&nbsp;a&nbsp;table and&nbsp;tidying up a&nbsp;room, both&nbsp;in&nbsp;virtual and&nbsp;real-world&nbsp;environments.
										</p>
						
							</motion.div>
						</section>

						<section ref = {user_case}  class="section" >
							<motion.div class="box-main" whileHover={{backgroundColor :"rgba(252, 252, 252, 1)"}}>
									<h1 class="text-big" >
										User case               
									</h1>
									<img src={user_case_svg} alt="k" class="svg" ></img>
									
							</motion.div>
						</section>

						<section ref = {architecture}  class="section">
							<motion.div class="box-main" whileHover={{backgroundColor :"rgba(252, 252, 252, 1)"}}>
								

									<h1 class="text-big"  >
										Architecture               
									</h1>
									<img class="svg" src={architecture_svg} alt="k" ></img>


								
							</motion.div>
						</section>
						
					</div>
					<div ref = {collaborators}  class="lower_section">

						
					
								<h1 class="text-big" id="program">
									Collaborators
								</h1>
					
								<ul class= "collab-buttons">
								
									<li >
										<a  href="https://incognite-lab.github.io/"><img class='svg_collab' src = {INCOG_logo}  ></img></a>
									</li>

									<li >
										<a  href="https://www.acin.tuwien.ac.at/"><img class='svg_collab' src = {ACIN_logo} ></img></a>	
									</li>
									
									<li>
										<a  href="https://en.uj.edu.pl/"> <img class='svg_collab' src = {SRL_logo} ></img></a>
									</li>
								</ul>
							
								
					
					</div>


					
			</div>


				<footer ref={contact} className="footer">
					<div class="footer-logo">
						<div ><a  href="https://www.ciirc.cvut.cz/cs/"><img  class="footer-button" src = {CIIRCC_logo}  ></img></a>
						</div>
						
						<div ><a  href="https://www.tuwien.at/"><img  class="footer-button" src = {TU_logo}  ></img></a>
						</div>
						
						<div ><a  href="https://en.uj.edu.pl/"><img class="footer-button" src = {UJ_logo}  ></img></a>
						</div>
					</div>
					<div class="vl"></div>

					<div class="footer-contact">
						<h1 class="text-footer-big">
							Contact
						</h1>
						<div class="adress">
							<p class="text-footer-small">ul. Ingardena 3/304</p>
							<p class="text-footer-small">30-060 Kraków</p>
							<p class="text-footer-small">Poland </p>	
						</div>
						<div class="contact-data">
							<p class="text-footer-small">alka.wrobel@student.uj.edu.pl</p>	
							<p class="text-footer-small">tel. +48667704644</p>	
						</div>
							
					</div>

				</footer>

			</div>	
				
		</Index>
			
		
		
	)
}

export default App
