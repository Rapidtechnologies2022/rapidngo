import React from 'react'

function VolunteerTwo() {
    return (
        <div className="container mt-5">
            <div className="section-head style-3 text-center">
              {/*   <h2 className="title">Become </h2> */}
              <h2 className="title">Become  <span className="text-primary">Volunteer</span></h2>
                <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="dlab-post-text">
                        <img className="alignleft rounded-md shadow" width="300" src="/images/volunteer/volunterr.jpg" alt="" />
                        <p>Make an impact in the lives of those in need. As a volunteer, you'll have the opportunity to contribute to our mission of providing essential resources, such as medicine, financial support for operations, and oxygen cylinders in times of emergency. Join our team and make a difference in the world. Sign up to volunteer today and make a positive impact in the community.</p>
                    {/*     <p>Volunteers help keep our doors open at Veni Foundation. We were initially founded and run solely by volunteers so have a deep appreciation for those that want to give of their time and energy. When you join hands with us, you are part of the Veni Foundation family.</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteerTwo