import React from 'react'
import Counterup from './CounterUp'

function VolunteerOne() {
  return (
    <section className="counter-wraper-2 overlay-black-middle mt-5">
      <div className="counter-inner content-inner-3" style={{ "backgroundImage": "url(/images/background/bg14.png)", "backgroundPosition": "center", "background-color": "#1B75BC","backgroundRepeat": "no-repeat", }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 m-b30">
              <div className="dlab-content-bx style-3 text-center">
                <div className="icon-content">
                  <h2 className="m-b0 text-primary"><Counterup count={5000} />+</h2>
                  <span className="title">Food Distribution</span>
                  <div className="icon-md text-primary">
                    <span className="icon-cell">
                      <img src='/images/icon/food-donation.png' alt='..Load' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 m-b30">
              <div className="dlab-content-bx style-3 text-center">
                <div className="icon-content">
                  <h2 className="m-b0 text-primary"><Counterup count={500} />+</h2>
                  <span className="title">Books Distribution</span>
                  <div className="icon-md text-primary">
                    <span className="icon-cell">
                      <img src='/images/icon/reading.png' alt='..Load' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 m-b30">
              <div className="dlab-content-bx style-3 text-center">
                <div className="icon-content">
                  <h2 className="m-b0 text-primary"><Counterup count={100} />+</h2>
                  <span className="title">Medical Support</span>
                  <div className="icon-md text-primary">
                    <span className="icon-cell">
                      {/* <i className="flaticon-startup"></i> */}
                      <img src='/images/icon/healthcare.png' alt='..Load' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 m-b30">
              <div className="dlab-content-bx style-3 text-center">
                <div className="icon-content">
                  <h2 className="m-b0 text-primary"><Counterup count={1} />+</h2>
                  <span className="title">Years Completed</span>
                  <div className="icon-md text-primary">
                    <span className="icon-cell">
                      {/* <i className="flaticon-confetti"></i> */}
                      <img src='/images/icon/confetti.png' alt='..Load' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VolunteerOne