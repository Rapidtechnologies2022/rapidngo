import React from 'react'

function Newsletter() {
  return (
    <section className="content-inner-3 bg-primary" style={{ "backgroundImage": "url(images/background/bg13.png)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}>
      <div className="container">
        <div className="wow fadeIn">
          {/*  <h3 classNameName="platform pb-3">How we help people </h3> */}
          <h2 className="platform m-b20">How we help people</h2>
        </div>
        <div className="row">
          <div className="col-md-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="dlab-media m-b30">
              <img src="images/about/img9.png" className="move-2" alt="" />
            </div>
          </div>
          <div className="col-md-3 pt-3 wow fadeInUp" data-wow-delay=".4s">
            <img src='/images/icon/food5.png' alt='..Load' />
            <h3 className="icon-heading mt-3">Pure food and water </h3>
            <p className="mt-3 custom-heading">
            It is essential for the survival and well-being of all individuals. At Veni Foundation, we strive to provide access to clean and safe food and water for those in need.
            </p>
          </div>
          <div className="col-md-3 pt-3 wow fadeInUp" data-wow-delay=".5s">
            <img src='/images/icon/drug.png' alt='..Load' />
            <h3 className="icon-heading mt-3">Health & Medicine</h3>
            <p className="mt-3 custom-heading">
            Access to quality healthcare is vital for maintaining good health and well-being. Veni Foundation is committed to providing these resources to improve their health and quality of life.
            </p>
          </div>
          <div className="col-md-3 pt-3 wow fadeInUp" data-wow-delay=".5s">
            <img src='/images/icon/education.png' alt='..Load' />
            <h3 className="icon-heading mt-3">Education</h3>
            <p className="mt-3 custom-heading">
            Education is the key to unlocking one's potential and creating a better future. Veni Foundation is dedicated to providing children and individuals with access to education opportunities, which will help them to achieve their goals and break the cycle of poverty.
            </p>
            <br />
          </div>
        </div>
      </div>

    </section>

  )
}

export default Newsletter;