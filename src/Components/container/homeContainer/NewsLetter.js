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
            <h3 className="icon-heading mt-3">Donate Food</h3>
            <p className="mt-3 custom-heading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti
              hic.
            </p>
          </div>
          <div className="col-md-3 pt-3 wow fadeInUp" data-wow-delay=".5s">
            <img src='/images/icon/drug.png' alt='..Load' />
            <h3 className="icon-heading mt-3">Donate Blood</h3>
            <p className="mt-3 custom-heading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti
              hic.
            </p>
          </div>
          <div className="col-md-3 pt-3 wow fadeInUp" data-wow-delay=".5s">
            <img src='/images/icon/education.png' alt='..Load' />
            <h3 className="icon-heading mt-3">Donate Books</h3>
            <p className="mt-3 custom-heading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti
              hic.
            </p>
            <br />
          </div>
        </div>
      </div>

    </section>

  )
}

export default Newsletter;