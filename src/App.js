import React from 'react';
import Index from "minimum-window-size";
import './App.css';
import { Circle, Rectangle } from 'react-shapes';
import dots_red from './Pictures/dots-nine-fill-svgrepo-com.svg';
import dots_blue from './Pictures/dots_blue.svg';
import wavy_dash from './Pictures/wavy-dash-svgrepo-com.svg';
import logo from './Pictures/logo.svg';
import { render } from "react-dom";
import { delay, motion } from "framer-motion";
import { useRef } from "react";

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
			top: elementRef.current.offsetTop,
			behavior: "smooth"
		})
	}
	return (
		<Index width={350} height={20}>
			<div>
				<motion.nav class="navbar background" whileHover={{ backgroundColor: "rgba(245,245,245,1)" }}>

					<ul class="nav-list">

						<li onClick={() => scrollToSection(about)}>About</li>
						<li onClick={() => scrollToSection(user_case)}> User&nbsp;Case</li>
						<li onClick={() => scrollToSection(architecture)}> Architecture </li>
						<li onClick={() => scrollToSection(collaborators)}> Collaborators </li>
						<li onClick={() => scrollToSection(contact)}> Contact</li>
					</ul>



				</motion.nav>
				<div class="main_bg" >


					<motion.div class="circle1" animate={{ y: 5 }} transition={{ type: "tween", duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}>
						<Circle r={200} fill={{ color: 'rgba(255,255,255,0)' }} stroke={{ color: '#E65243' }} strokeWidth={16} />
					</motion.div>
					<motion.div class="circle3" animate={{ y: -10, x: -8 }} transition={{ type: "tween", duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}>
						<Circle r={80} fill={{ color: '#2D93AD' }} />
					</motion.div>

					<motion.div class="circle2" animate={{ x: 3 }} transition={{ type: "tween", duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}>
						<Circle r={100} fill={{ color: 'rgba(255,255,255,0)' }} stroke={{ color: '#000000' }} strokeWidth={30} />

					</motion.div>
					<motion.div class="circle4" animate={{ y: -3, x: -5 }} transition={{ type: "tween", duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}>
						<Circle r={200} fill={{ color: '#28869e' }} />

					</motion.div>

					<motion.div class="wavy_dash" animate={{ y: 10 }} transition={{ type: "tween", duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}>
						<img src={wavy_dash} alt="k" height={"70%"} width={"70%"} ></img>
					</motion.div>
					<motion.div class="dots1" animate={{ y: 19 }} transition={{ type: "tween", duration: 5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}>
						<img src={dots_red} alt="k" height={"50%"} width={"50%"}></img>
					</motion.div>

					<motion.div class="dots2" animate={{ y: 30, x: 2 }} transition={{ type: "tween", duration: 10, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}>
						<img src={dots_blue} alt="k" height={"70%"} width={"70%"}></img>
					</motion.div>


					<div class="upper-section">



						<section class="landing">
							<div >
								<motion.div class="center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1 }} >

									<img class="logo" src={logo}  ></img>
								</motion.div>
							</div>
						</section>


					</div>
					<div class="lower_section">

						<motion.section ref={about} class="section">

							<motion.div class="box-main about" initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>

								<h1 class="text-big" style={{ textAlign: "right" }}>iChores is a project with the scientific goal of creating collaborative human-robot interfaces for intuitive interaction through multiple modalities. </h1>
								<p class="text-small" style={{ textAlign: "right" }}>
									Our research focuses on investigating the methods that enable a collaborative robot to extract task-relevant information from the gaze and gestures of a human partner, and how gaze, gesture, and speech information can be combined for a more natural and intuitive interface. We employ a user-centered design methodology and explore research questions and hypotheses regarding the impact of combining modalities on the robot's understanding, error count, task duration, user experience, comfort, and trust.
								</p>


							</motion.div>

						</motion.section>

						<section ref={user_case} class="section" style={{ background: "rgba(250, 250, 250, 0.97)" }} >
							<motion.div class="box-main user_case" initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>


								<div style={{ paddingRight: "3vw" }}><img src={user_case_svg} alt="k" class="svg" ></img></div>
								<div>
									<h1 class="text-medium" style={{ textAlign: "left", paddingTop: "15%" }}> Imagine a scenario where a homeowner is hosting a party in their living room, and there are plates, cups, and utensils scattered all over the place...</h1>


									<p class="text-small" style={{ textAlign: "left" }}>
										The homeowner has a robotic assistant that they can communicate with using natural language, gestures, and gaze.
									</p>
								</div>


							</motion.div>

						</section>

						<section ref={architecture} class="section">

							<motion.div class="box-main architecture" initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>

								<h1 class="text-medium" style={{ textAlign: "right" }} >
									We take the approach of behavior-based robotics <a href="https://books.google.co.jp/books?hl=pl&lr=&id=mRWT6alZt9oC&oi=fnd&pg=PR11&dq=arkin+1998&ots=460pcjN8kz&sig=c4lXftVU1wljK4DrpqT_bSOYSUc&redir_esc=y#v=onepage&q=arkin%201998&f=false">(Arkin&nbsp;1998)</a> to organize sensory information as percepts, which are used to determine the&nbsp;robot’s&nbsp;behavior.
								</h1>
								<img class="svg" src={architecture_svg} alt="k" style={{ paddingLeft: "3vw" }}></img>

							</motion.div>


						</section>
						<section class="section" ref={collaborators} style={{ background: "rgba(250, 250, 250, 1)" }}>
							<motion.div class="box-main collaborators"
							initial={{ opacity: 0, scale: 0.99 }} 
							whileInView={{ opacity: 1, scale: 1 }} 
							transition={{ duration: 1 }}>
								<h1 class="text-big" >
									Collaborators
								</h1>
								<div class="collab-buttons" >
									<motion.a whileHover={{scale: 1.1}} transition={{duration: 0.5}} href="https://incognite-lab.github.io/"><img class='svg_collab' src={INCOG_logo}  ></img></motion.a>

									<motion.a whileHover={{scale: 1.1}} transition={{duration: 0.5}} href="https://www.acin.tuwien.ac.at/"><img class='svg_collab' src={ACIN_logo} ></img></motion.a>

									<motion.a whileHover={{scale: 1.1}} transition={{duration: 0.5}} href="https://en.uj.edu.pl/"> <img class='svg_collab' src={SRL_logo} ></img></motion.a>

									<motion.a whileHover={{scale: 1.1}} transition={{duration: 0.5}} href="https://www.ciirc.cvut.cz/cs/"><img class="svg_collab" src={CIIRCC_logo}  ></img></motion.a>
									

									<motion.a whileHover={{scale: 1.1}} transition={{duration: 0.5}} href="https://www.tuwien.at/"><img class="svg_collab" src={TU_logo}  ></img></motion.a>
									

									<motion.a whileHover={{scale: 1.1}} transition={{duration: 0.5}} href="https://en.uj.edu.pl/"><img class="svg_collab" src={UJ_logo}  ></img></motion.a>
									
								</div>


							</motion.div>
						</section>

					</div>



				</div>


				<footer ref={contact} className="footer">
				
					<div class="contact">
						<h1 class="text-footer-big">
							Contact
						</h1>
						<hr></hr>
						<div class="address">
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
