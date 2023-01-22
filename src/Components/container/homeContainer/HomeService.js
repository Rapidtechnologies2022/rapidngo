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
									<p>Veni Foundation also provides food donations to the poor, homeless, and elderly to help reduce hunger and food insecurity in their communities. The food donation program helps provide healthy and nutritious meals to those struggling to make ends meet.</p>
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
									<p>At Veni Foundation, we believe in the power of women and their potential to create a more equitable society. Through our programs and initiatives, we work to empower women by providing access to education, economic opportunities, and leadership development. Join us in our mission to empower women and create an equal world.</p>
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
									<p>The NGO also provides medical support by setting up health clinics and providing access to medical care, particularly in remote and underserved areas. Medical support provided by the foundation helps to improve the overall health and well-being of the communities they serve.</p>
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
									<p>Veni Foundation, conducting many charitable and social activities, like Blood Donation Camps, Medical Support for poor people. As we all know, Blood cannot be generated, but it can only be replaced by generous donors.</p>
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
									<p>The foundation provides educational opportunities for children in underprivileged communities, helping to break the cycle of poverty through access to quality education. By providing children with quality education, the foundation helps to build a brighter future for the communities they serve.</p>
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