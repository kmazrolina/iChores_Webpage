import React from 'react';
import './App.css';
import { Circle, Rectangle } from 'react-shapes';
import dots_red from './Pictures/dots-nine-fill-svgrepo-com.svg';
import dots_blue from './Pictures/dots_blue.svg';
import wavy_dash from './Pictures/wavy-dash-svgrepo-com.svg';
import logo from './Pictures/logo.svg';
import { render } from "react-dom";
import { delay, motion } from "framer-motion";
import { useRef } from "react";
import RenderInBrowser from 'react-render-in-browser';
import { useScroll, useTransform } from "framer-motion";




import user_case_svg from './Pictures/user_case.svg';
import dotted_L_shape_line from './Pictures/dotted_L_shape_line.svg'
import dash_curved_line from './Pictures/dash_curved_line.svg'
import narrow_width_dash_line from './Pictures/narrow_width_dash_line.svg'
import robot from './Pictures/robot.svg'
import eye from './Pictures/eye.svg'
import talk from './Pictures/talk.svg'
import hand from './Pictures/hand.svg'
import book from './Pictures/book.svg'

import SRL_logo from './Pictures/SRL_logo.svg';
import ACIN_logo from './Pictures/ACIN_logo.svg';
import INCOG_logo from './Pictures/INCOG_logo.png';
import acin_bubble from './Pictures/bubble_acin.svg'
import incog_bubble from './Pictures/bubble1.svg'
import srl_bubble from './Pictures/bubble2.svg'

import mail_icon from './Pictures/mail_icon.svg';
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


	const { scrollYProgress } = useScroll();

	// interpolate the scrollYProgress value from 0-1 to the new viewBox values
	const viewBoxY = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

	const closeSidebarDelayed = async event => {

		await delay(10);
		setSidebarOpen(!sidebarOpen);

	};



	return (

		<div class="main_div" style={{ overflow: "unset" }} >

			<motion.nav class="navbar background" whileHover={{ backgroundColor: "rgba(245,245,245,1)" }}>
				<img class="svg_menu" src={sidebarOpen ? close_icon : menu} onClick={() => { setSidebarOpen(!sidebarOpen) }} ></img>
				<ul class="nav-list">
					<li class="navbar_links" onClick={() => scrollToSection(about, "smooth")}>About</li>
					<li class="navbar_links" onClick={() => scrollToSection(user_case, "smooth")}> User&nbsp;Case</li>
					<li class="navbar_links" onClick={() => scrollToSection(architecture, "smooth")}> Architecture </li>
					<li class="navbar_links" onClick={() => scrollToSection(collaborators, "smooth")}> Collaborators </li>

				</ul>
				<div class={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
					<ul class="sidebar_links">
						<li class="sidebar_link" onClick={() => { scrollToSection(about, "auto"); closeSidebarDelayed() }}>About</li>
						<li class="sidebar_link" onClick={() => { scrollToSection(user_case, "auto"); closeSidebarDelayed() }}> User&nbsp;Case</li>
						<li class="sidebar_link" onClick={() => { scrollToSection(architecture, "auto"); closeSidebarDelayed() }}> Architecture </li>
						<li class="sidebar_link" onClick={() => { scrollToSection(collaborators, "auto"); closeSidebarDelayed() }}> Collaborators </li>

					</ul>
				</div>

			</motion.nav>
			<div class="main_bg" >


				<motion.div class="circle1" animate={{ y: 5 }} transition={{ type: "tween", duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}>
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




				<section class="landing">
					<div >

						<div class="center" >

							<img class="logo" src={logo}  ></img>
						</div>

					</div>
				</section>


				<div class="lower_section">

					<motion.section ref={about} class="section">
						<RenderInBrowser except mobile>
							<motion.div class="box-main about" initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>

								<h1 class="text-big" style={{ textAlign: "right" }}>iChores is a project with the scientific goal of creating collaborative human&#8209;robot interfaces for intuitive interaction through multiple modalities. </h1>
								<p class="text-small" style={{ textAlign: "right" }}>
									Our research focuses on&nbsp;investigating the&nbsp;methods that enable a&nbsp;collaborative robot to&nbsp;extract task&#8209;relevant information from&nbsp;the&nbsp;gaze and&nbsp;gestures of&nbsp;a&nbsp;human partner, and&nbsp;how gaze, gesture, and&nbsp;speech information can be&nbsp;combined for&nbsp;a&nbsp;more natural and&nbsp;intuitive interface. We&nbsp;employ a&nbsp;user&#8209;centered design methodology and explore research questions and&nbsp;hypotheses regarding the&nbsp;impact of&nbsp;combining modalities on&nbsp;the&nbsp;robot's understanding, error count, task duration, user experience, comfort, and&nbsp;trust.
								</p>


							</motion.div>
						</RenderInBrowser>

						<RenderInBrowser only mobile>
							<div class="box-main about" >

								<h1 class="text-big" style={{ textAlign: "right" }}>iChores is a project with the scientific goal of creating collaborative human&#8209;robot interfaces for intuitive interaction through multiple modalities. </h1>
								<p class="text-small" style={{ textAlign: "right" }}>
									Our research focuses on&nbsp;investigating the&nbsp;methods that enable a&nbsp;collaborative robot to&nbsp;extract task&#8209;relevant information from&nbsp;the&nbsp;gaze and&nbsp;gestures of&nbsp;a&nbsp;human partner, and&nbsp;how gaze, gesture, and&nbsp;speech information can be&nbsp;combined for&nbsp;a&nbsp;more natural and&nbsp;intuitive interface. We&nbsp;employ a&nbsp;user&#8209;centered design methodology and explore research questions and&nbsp;hypotheses regarding the&nbsp;impact of&nbsp;combining modalities on&nbsp;the&nbsp;robot's understanding, error count, task duration, user experience, comfort, and&nbsp;trust.
								</p>


							</div>
						</RenderInBrowser>

					</motion.section>

					<section class="section" style={{ background: "rgba(45,147,173, 0.97" }} >
						<RenderInBrowser except mobile>
							<motion.div class="box-main imagine" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}>

								<div>
									<h1 class="text-big" style={{ textAlign: "left" }}> Imagine a scenario where a&nbsp;homeowner is&nbsp;hosting a&nbsp;party in&nbsp;their living room, and&nbsp;there are plates, cups, and&nbsp;utensils scattered all over the&nbsp;place...</h1>

								</div>


							</motion.div>
						</RenderInBrowser>

						<RenderInBrowser only mobile>
							<div class="box-main imagine" >

								<div>
									<h1 class="text-big" style={{ textAlign: "left" }}> Imagine a scenario where a&nbsp;homeowner is&nbsp;hosting a&nbsp;party in&nbsp;their living room, and&nbsp;there are plates, cups, and&nbsp;utensils scattered all over the&nbsp;place...</h1>

								</div>


							</div>
						</RenderInBrowser>

					</section>

					<section ref={user_case} class="section" style={{ background: "rgba(250, 250, 250, 0.97)" }} >
						<RenderInBrowser except mobile>
							<motion.div class="box-main user_case" initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>


								<div class="user_case_svg" ><img src={user_case_svg} alt="k" class="svg" ></img></div>
								<div>
									<h1 class="text-small" style={{ textAlign: "left", paddingTop: "15%" }}> ...the&nbsp;homeowner has a&nbsp;robotic assistant that they can&nbsp;communicate with using natural language, gestures, and&nbsp;gaze.</h1>

								</div>


							</motion.div>
						</RenderInBrowser>

						<RenderInBrowser only mobile>
							<div class="box-main user_case" initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>


								<div class="user_case_svg" ><img src={user_case_svg} alt="k" class="svg" ></img></div>
								<div>
									<h1 class="text-small" style={{ textAlign: "left", paddingTop: "15%" }}> ...the&nbsp;homeowner has a&nbsp;robotic assistant that they can&nbsp;communicate with using natural language, gestures, and&nbsp;gaze.</h1>

								</div>


							</div>
						</RenderInBrowser>

					</section>


					<section ref={architecture} class="arch_section">
						<RenderInBrowser except mobile>
							<div class="arch_contents">
								<img class="dotted_L_shape_line" src={dotted_L_shape_line}></img>
								<img class="dash_curved_line" src={dash_curved_line}></img>
								<div class="short_line" ></div>
								<div class="long_line" ></div>
								<img class="replacement_dash_line" src={narrow_width_dash_line}></img>
								<motion.img class="robot" src={robot}></motion.img>
								<div class="simple_line" ></div>
								<div class="dash_line" ></div>
								<motion.div initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} class="arch_percept gaze">
									<img class="svg_percept" src={eye}></img>
									<div class="arch_percept_text">
										<p class="text-small-arch">Gaze</p>
										<p class="text-code">&lt; &nbsp;type, duration, direction&nbsp;&gt;</p>
									</div>
								</motion.div>
								<motion.div initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} class="arch_percept gestures">
									<img class="svg_percept" src={hand}></img>
									<div class="arch_percept_text">
										<p class="text-small-arch">Gestures</p>
										<p class="text-code">&lt; &nbsp;type, direction&nbsp;&gt;</p>
									</div>
								</motion.div>
								<motion.div initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} class="arch_percept speech">
									<img class="svg_percept" src={talk}></img>
									<div class="arch_percept_text">
										<p class="text-small-arch">Speech</p>
										<p class="text-code">&lt; &nbsp;words, phrases&nbsp;&gt;</p>
									</div>
								</motion.div>
								<motion.div initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} class="arch_percept objects">
									<img class="svg_percept" src={book}></img>
									<div class="arch_percept_text">
										<p class="text-small-arch">Objects</p>
										<p class="text-code">&lt; &nbsp;location, spatial relationships&nbsp;&gt;</p>
									</div>
								</motion.div>


								<motion.div initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} class="arch_text reasoning">
									<h1 class="text-big">Reasoning and decision&#8209;making</h1>
									<p class="text-small">We take the&nbsp;approach of&nbsp;behavior&#8209;based robotics <a href="https://books.google.co.jp/books?hl=pl&lr=&id=mRWT6alZt9oC&oi=fnd&pg=PR11&dq=arkin+1998&ots=460pcjN8kz&sig=c4lXftVU1wljK4DrpqT_bSOYSUc&redir_esc=y#v=onepage&q=arkin%201998&f=false">(Arkin&nbsp;1998)</a> to&nbsp;organize sensory information as&nbsp;percepts.</p>
								</motion.div>
								<motion.div initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} class="arch_text actions">
									<h1 class="text-big">Robot's actions</h1>
									<p class="text-small">The percepts are used to&nbsp;determine the&nbsp;robot’s&nbsp;behavior.</p>

								</motion.div>
							</div>
						</RenderInBrowser>

						<RenderInBrowser only mobile>
							<div class="arch_contents">
								<img class="dotted_L_shape_line" src={dotted_L_shape_line}></img>
								<svg class="dash_curved_line" id="dash_line_svg" src={dash_curved_line}  viewBox="0 100 30 431"></svg>
								<div class="short_line" ></div>
								<div class="long_line" ></div>
								<img class="robot" src={robot}></img>
								<div class="simple_line" ></div>
								<div class="dash_line" ></div>
								<div class="arch_percept gaze">
									<img class="svg_percept" src={eye}></img>
									<div class="arch_percept_text">
										<p class="text-small-arch">Gaze</p>
										<p class="text-code">&lt; &nbsp;type, duration, direction&nbsp;&gt;</p>
									</div>
								</div>
								<div class="arch_percept gestures">
									<img class="svg_percept" src={hand}></img>
									<div class="arch_percept_text">
										<p class="text-small-arch">Gestures</p>
										<p class="text-code">&lt; &nbsp;type, direction&nbsp;&gt;</p>
									</div>
								</div>
								<div class="arch_percept speech">
									<img class="svg_percept" src={talk}></img>
									<div class="arch_percept_text">
										<p class="text-small-arch">Speech</p>
										<p class="text-code">&lt; &nbsp;words, phrases&nbsp;&gt;</p>
									</div>
								</div>
								<div class="arch_percept objects">
									<img class="svg_percept" src={book}></img>
									<div class="arch_percept_text">
										<p class="text-small-arch">Objects</p>
										<p class="text-code">&lt; &nbsp;location, spatial relationships&nbsp;&gt;</p>
									</div>
								</div>


								<div class="arch_text reasoning">
									<h1 class="text-big">Reasoning and decision-making</h1>
									<p class="text-small-arch">We take the&nbsp;approach of&nbsp;behavior&#8209;based robotics <a href="https://books.google.co.jp/books?hl=pl&lr=&id=mRWT6alZt9oC&oi=fnd&pg=PR11&dq=arkin+1998&ots=460pcjN8kz&sig=c4lXftVU1wljK4DrpqT_bSOYSUc&redir_esc=y#v=onepage&q=arkin%201998&f=false">(Arkin&nbsp;1998)</a> to&nbsp;organize sensory information as&nbsp;percepts.</p>
								</div>
								<div class="arch_text actions">
									<h1 class="text-big">Robot's actions</h1>
									<p class="text-small-arch">The percepts are used to&nbsp;determine the&nbsp;robot’s&nbsp;behavior.</p>

								</div>
							</div>
						</RenderInBrowser>
					</section>


					<section class="section collab_section" ref={collaborators} style={{ background: "rgba(250, 250, 250, 1)" }}>

						<h1 class="text-big" >
							Collaborators
						</h1>
						<div class="collab-buttons" >
							<div class="buttons_row">
								<motion.div class="row_contents incog_row" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
									<img class="bubble" src={incog_bubble}></img>
									<div class="button_contents incog">
										<a href="https://incognite-lab.github.io/contact.html"><img class="svg_collab" src={INCOG_logo}></img></a>
										<p class="text-small_collab"><a href="https://www.cvut.cz/en">Czech Technical University in&nbsp;Prague</a></p>
										<p class="text-small_collab email"><img class="mail_icon" src={mail_icon}></img>example@email.com</p>
									</div>
								</motion.div>
							</div>
							<div class="buttons_row">

								<motion.div class="row_contents acin_row" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} >
									<img class="bubble" src={acin_bubble}></img>
									<div class="button_contents acin">
										<a href="https://www.acin.tuwien.ac.at/en/"><img class="svg_collab" src={ACIN_logo}></img></a>
										<p class="text-small_collab"><a href="https://www.tuwien.at/">TU&nbsp;Wien</a></p>
										<p class="text-small_collab email"><img class="mail_icon" src={mail_icon}></img>office@acin.tuwien.ac.at</p>
									</div>


								</motion.div>
							</div>
							<div class="buttons_row">

								<motion.div class="row_contents srl_row" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
									<img class="bubble" src={srl_bubble}></img>
									<div class="button_contents srl">
										<img class="svg_collab" src={SRL_logo}></img>
										<p class="text-small_collab"><a href="https://www.uj.edu.pl/">Jagiellonian University in&nbsp;Cracow</a></p>
										<p class="text-small_collab email"><img class="mail_icon" src={mail_icon}></img>example@email.com</p>
									</div>

								</motion.div>
							</div>

						</div>






					</section>

				</div>



			</div>


			<footer ref={contact} className="footer">

			</footer>

		</div>





	)
}

export default App
