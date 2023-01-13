import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HomeService() {
	const [open, setOpen] = useState("p2");
	const navigate = useNavigate();
	return (
		<>
			<section className="content-inner-2" style={{ "backgroundImage": "url(images/background/bg16.png)" }}>
				<div className="container">
					<div className="row icon-wraper-1">
						<div className="col-lg-4 col-md-6">
							<div className="section-head style-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								{/* 							<h6 className="sub-title text-primary bgl-primary m-b15">OUR SERVICES</h6> */}
								<h2 className="title m-t10 pt-5"> Society For<span className="text-primary"> Helping Integrity </span> Network For Empowerment</h2>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" onClick={() => navigate("/services")} style={{ cursor: "pointer" }}>
							<div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
								<div className="icon-bx-sm radius bgl-primary">
									<a href="javascript:void(0);" className="icon-cell">
										<img src='/images/icon/volunteer.png' alt='..Load' />
									</a>
								</div>
								<div className="wraper-effect"></div>
								<div className="icon-content">
									<h4 className="dlab-title m-b15">Food Donation</h4>
									<p>We create highly polished IOS & Android apps for startups and enterprise clients. We also know a thing or two about branding, websites, and user acquisition.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" onClick={() => navigate("/services")} style={{ cursor: "pointer" }}>
							<div className={`${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p2")}>
								<div className="icon-bx-sm radius bgl-primary">
									<a href="javascript:void(0);" className="icon-cell">
										<img src='/images/icon/woman.png' alt='..Load' />
									</a>
								</div>
								<div className="wraper-effect"></div>
								<div className="icon-content">
									<h4 className="dlab-title m-b15">Women Empowerment</h4>
									<p>Rapid Technologies is having a strong Web Development wing, which is enriched with various technologies i.e. Ajax, ASP, ASP.NET, JavaScript, HTML, CSS, PHP, Node.Js, Angular Js, Java, etc. We are using various frameworks as per our clients’ requirements.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" onClick={() => navigate("/services")} style={{ cursor: "pointer" }}>
							<div className={`${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p3")}>
								<div className="icon-bx-sm radius bgl-primary">
									<a href="javascript:void(0);" className="icon-cell">
										<img src='/images/icon/box.png' alt='..Load' />
									</a>
								</div>
								<div className="wraper-effect"></div>
								<div className="icon-content">
									<h4 className="dlab-title m-b15">Medical Support</h4>
									<p>Are you looking for a fresh new digital agency, who treats your business like its own, looks to continually improve results, has proven experience running digital campaigns for brands (big and small) for over a decade.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" onClick={() => navigate("/services")} style={{ cursor: "pointer" }}>
							<div className={`${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p4")}>
								<div className="icon-bx-sm radius bgl-primary">
									<a href="javascript:void(0);" className="icon-cell">
										<img src='/images/icon/photo.png' alt='..Load' />
									</a>
								</div>
								<div className="wraper-effect"></div>
								<div className="icon-content">
									<h4 className="dlab-title m-b15">Blood Donation</h4>
									<p>An IT consultant works in partnership with clients, advising them how to use information technology in order to meet their business objectives or overcome problems. They work to improve the structure and efficiency of IT systems in various organisations.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" onClick={() => navigate("/services")} style={{ cursor: "pointer" }}>
							<div className={`${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p5")}>
								<div className="icon-bx-sm radius bgl-primary">
									<a href="javascript:void(0);" className="icon-cell">
										<img src='/images/icon/pcare.png' alt='..Load' />
									</a>
								</div>
								<div className="wraper-effect"></div>
								<div className="icon-content">
									<h4 className="dlab-title m-b15">Education Support</h4>
									<p>What are the options available, manage it yourself or ask a supplier to do it for you. Ensuring the right strategy is in place that fits the goals of your organisation.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomeService