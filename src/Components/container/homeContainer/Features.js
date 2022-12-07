import React from 'react'

function Features() {
    return (
        <>
           <section className="content-inner bg-white">
			<div className="container">
				<div className="section-head style-3 text-center">
				{/* 	<h2 className="title">UpComing Programs</h2> */}
				<h2 className="title m-b20">UpComing<span className="text-primary"> Programs</span> </h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row align-items-center about-wraper-2">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><img src='/images/gif/gelato.gif' alt='..Load' /></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Food Distribution</h4>
										<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><img src='/images/gif/open-book.gif' alt='..Load' /></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Stationary Item Distribution</h4>
										<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media text-center m-b30">
							<img src="/images/icon/5299.jpg" className="move-1" alt=""/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><img src='/images/gif/medicine.gif' alt='..Load' /></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Medicine Distribution</h4>
										<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><img src='/images/gif/dress.gif' alt='..Load' /></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Clothes Distribution</h4>
										<p> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
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