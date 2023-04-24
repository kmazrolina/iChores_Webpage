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
import SRL_logo from './Pictures/SRL_logo.svg';
import CIIRCC_logo from './Pictures/CIIRCC_logo.svg';
import ACIN_logo from './Pictures/ACIN_logo.svg';
import TU_logo from './Pictures/TU_logo.svg';
import INCOG_logo from './Pictures/INCOG_logo.svg';
import UJ_logo from './Pictures/UJ_logo_ostatnieb.svg';
import mail_icon from './Pictures/mail_icon.svg';
import phone_icon from './Pictures/phone_icon.svg';
import menu from './Pictures/menu.svg';
import close_icon from './Pictures/closeIcon.svg';



function App() {
	const about = useRef(null);
	const architecture = useRef(null);
	const collaborators = useRef(null);
	const user_case = useRef(null);
	const contact = useRef(null);

	const delay = ms => new Promise(
		resolve => setTimeout(resolve, ms)
	  );

	
	const scrollToSection = (elementRef, bahevior) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: bahevior,
			
		})
	}


	const [sidebarOpen, setSidebarOpen] = React.useState(false);

	

	const closeSidebarDelayed  = async event  =>{
		
		await delay(20);
		setSidebarOpen(!sidebarOpen);
	};

	

	return (
		<Index width={350} height={20}>
			<div>
				<motion.nav class="navbar background" whileHover={{ backgroundColor: "rgba(245,245,245,1)" }}>
					<ul class="nav-list">
							<li ><img class="svg_menu"  src={sidebarOpen? close_icon : menu}  onClick={()=>{setSidebarOpen(!sidebarOpen)}} ></img></li>
							<li class="navbar_links" onClick={() => scrollToSection(about, "smooth")}>About</li>
							<li class="navbar_links" onClick={() => scrollToSection(user_case, "smooth")}> User&nbsp;Case</li>
							<li class="navbar_links" onClick={() => scrollToSection(architecture, "smooth")}> Architecture </li>
							<li class="navbar_links" onClick={() => scrollToSection(collaborators, "smooth")}> Collaborators </li>
							<li class="navbar_links" onClick={() => scrollToSection(contact, "smooth")}> Contact</li>
					</ul>
					<motion.div class="sidebar background" animate={{visibility: sidebarOpen? "visible": "hidden", height: sidebarOpen? "100vh": "0" , width: "100vw", opacity: sidebarOpen? 1: 0}} initial={{opacity: sidebarOpen? 1: 0}} transition={{duration: 0.2}}>
						<motion.ul class="sidebar_links"
						animate={{opacity: sidebarOpen? 1: 0}} initial={{opacity: sidebarOpen? 1: 0}} transition={{duration: 0.3, delay:0.2}}>
							<li class="sidebar_link" onClick={() => { scrollToSection(about, "auto"); closeSidebarDelayed()}}>About</li>
							<li class="sidebar_link" onClick={() => {scrollToSection(user_case, "auto"); closeSidebarDelayed() }}> User&nbsp;Case</li>
							<li class="sidebar_link" onClick={() => {scrollToSection(architecture, "auto"); closeSidebarDelayed()}}> Architecture </li>
							<li class="sidebar_link" onClick={() => {scrollToSection(collaborators, "auto"); closeSidebarDelayed() }}> Collaborators </li>
							<li class="sidebar_link" onClick={() => { scrollToSection(contact, "auto"); closeSidebarDelayed() }}> Contact</li>
						</motion.ul>
					</motion.div>
					





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

								<h1 class="text-big" style={{ textAlign: "right" }}>iChores is a project with the scientific goal of creating collaborative human&#8209;robot interfaces for intuitive interaction through multiple modalities. </h1>
								<p class="text-small" style={{ textAlign: "right" }}>
									Our research focuses on&nbsp;investigating the&nbsp;methods that enable a&nbsp;collaborative robot to&nbsp;extract task&#8209;relevant information from&nbsp;the&nbsp;gaze and&nbsp;gestures of&nbsp;a&nbsp;human partner, and&nbsp;how gaze, gesture, and&nbsp;speech information can be&nbsp;combined for&nbsp;a&nbsp;more natural and&nbsp;intuitive interface. We&nbsp;employ a&nbsp;user&#8209;centered design methodology and explore research questions and&nbsp;hypotheses regarding the&nbsp;impact of&nbsp;combining modalities on&nbsp;the&nbsp;robot's understanding, error count, task duration, user experience, comfort, and&nbsp;trust.
								</p>


							</motion.div>

						</motion.section>

						<section class="section" style={{ background: "rgba(45,147,173, 0.97" }} >
							<motion.div class="box-main imagine" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}>

								<div>
									<h1 class="text-big" style={{ textAlign: "left" }}> Imagine a scenario where a&nbsp;homeowner is&nbsp;hosting a&nbsp;party in&nbsp;their living room, and&nbsp;there are plates, cups, and&nbsp;utensils scattered all over the&nbsp;place...</h1>

								</div>


							</motion.div>

						</section>

						<section ref={user_case} class="section" style={{ background: "rgba(250, 250, 250, 0.97)" }} >
							<motion.div class="box-main user_case" initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>


								<div class="user_case_svg" ><img  src={user_case_svg} alt="k" class="svg" ></img></div>
								<div>
									<h1 class="text-small" style={{ textAlign: "left", paddingTop: "15%" }}> ...the&nbsp;homeowner has a&nbsp;robotic assistant that they can&nbsp;communicate with using natural language, gestures, and&nbsp;gaze.</h1>

								</div>


							</motion.div>

						</section>


						<section ref={architecture} class="section">

							<motion.div class="box-main architecture" initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>

								<h1 class="text-small architecture_h1" >
									We take the&nbsp;approach of&nbsp;behavior&#8209;based robotics <a href="https://books.google.co.jp/books?hl=pl&lr=&id=mRWT6alZt9oC&oi=fnd&pg=PR11&dq=arkin+1998&ots=460pcjN8kz&sig=c4lXftVU1wljK4DrpqT_bSOYSUc&redir_esc=y#v=onepage&q=arkin%201998&f=false">(Arkin&nbsp;1998)</a> to&nbsp;organize sensory information as&nbsp;percepts, which are used to&nbsp;determine the&nbsp;robot’s&nbsp;behavior.
								</h1>
								<img class="svg architecture_svg" src={architecture_svg} alt="k" ></img>

							</motion.div>


						</section>
						<section class="section" ref={collaborators} style={{ background: "rgba(250, 250, 250, 1)" }}>
							<motion.div class="box-main collaborators"
								initial={{ opacity: 0, scale: 0.99 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 2 }}>
								<h1 class="text-big" >
									Collaborators
								</h1>
								<div class="collab-buttons" >
									<div class="buttons_row">
										<motion.a whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} href="https://incognite-lab.github.io/"><img class='svg_collab' src={INCOG_logo}  ></img></motion.a>

										<motion.a whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} href="https://www.acin.tuwien.ac.at/"><img class='svg_collab' src={ACIN_logo} ></img></motion.a>

										<motion.a whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} href="https://filozofia.uj.edu.pl/"> <img class='svg_collab' src={SRL_logo} ></img></motion.a>
									</div>
									<div class="buttons_row">
										<motion.a whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} href="https://www.ciirc.cvut.cz/cs/"><img class="svg_collab" src={CIIRCC_logo}  ></img></motion.a>


										<motion.a whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} href="https://www.tuwien.at/"><img class="svg_collab" src={TU_logo}  ></img></motion.a>


										<motion.a whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} href="https://en.uj.edu.pl/"><img class="svg_collab" src={UJ_logo}  ></img></motion.a>
									</div>

								</div>


							</motion.div>
						</section>

					</div>



				</div>


				<footer ref={contact} className="footer">

					<div class="contact">
						<h1 class="text-big">
							Contact
						</h1>
						<hr></hr>
						<div class="address">
							<p class="text-small">ul. Ingardena 3/304</p>
							<p class="text-small">30-060 Kraków</p>
							<p class="text-small">Poland </p>
						</div>
						<div class="contact-data">
							<p class="text-small"><img class ="contact_svg" src={mail_icon}></img>ichores@gmail.com</p>
							<p class="text-small"><img class ="contact_svg" src={phone_icon}></img> +48123456789</p>
						</div>
					</div>


				</footer>

			</div>

		</Index>



	)
}

export default App
