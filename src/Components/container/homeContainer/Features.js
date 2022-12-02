import React from 'react'

function Features() {
    return (
        <>
           <section className="content-inner bg-white">
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Our Fetures</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row align-items-center about-wraper-2">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><i className="flaticon-idea"></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Requirement & Analysis</h4>
										<p>The requirements process typically consists of three basic tasks: problem or requirement analysis, requirements specification, and requirements validation.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><i className="flaticon-vector"></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Designing</h4>
										<p>In software design, we consider the system to be a set of components or modules with clearly defined behaviors & boundaries.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media text-center m-b30">
							<img src="images/about/img1.png" className="move-1" alt=""/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><i className="flaticon-coding"></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Development</h4>
										<p>Ensure compatibility between different team projects and to make sure target goals are being met.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><i className="flaticon-rocket"></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Testing & Deploy</h4>
										<p> Different parts of the application should also be tested to work seamlessly together—performance test, to reduce any hangs or lags in processing.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default Features