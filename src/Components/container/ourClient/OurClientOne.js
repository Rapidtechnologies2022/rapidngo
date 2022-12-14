import React from 'react'
import Counterup from './CounterUp'

function OurClientOne() {
  return (
    <section className="counter-wraper-2 overlay-gradient-dark mt-5">
      <div className="counter-inner content-inner-3" style={{ "backgroundImage": "url(/images/background/bg14.png)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 m-b30">
              <div className="dlab-content-bx style-3 text-center">
                <div className="icon-content">
                  <h2 className="m-b0 text-primary"><Counterup count={1000} />+</h2>
                  <span className="title">Satisfied Clients</span>
                  <div className="icon-md text-primary">
                    <span className="icon-cell">
                      <i className="flaticon-smile"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 m-b30">
              <div className="dlab-content-bx style-3 text-center">
                <div className="icon-content">
                  <h2 className="m-b0 text-primary"><Counterup count={1000} />+</h2>
                  <span className="title">Project Completed</span>
                  <div className="icon-md text-primary">
                    <span className="icon-cell">
                      <i className="flaticon-line-chart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 m-b30">
              <div className="dlab-content-bx style-3 text-center">
                <div className="icon-content">
                  <h2 className="m-b0 text-primary"><Counterup count={1448} />+</h2>
                  <span className="title">Project Lunched</span>
                  <div className="icon-md text-primary">
                    <span className="icon-cell">
                      <i className="flaticon-startup"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 m-b30">
              <div className="dlab-content-bx style-3 text-center">
                <div className="icon-content">
                  <h2 className="m-b0 text-primary"><Counterup count={10} />+</h2>
                  <span className="title">Years Completed</span>
                  <div className="icon-md text-primary">
                    <span className="icon-cell">
                      <i className="flaticon-confetti"></i>
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

export default OurClientOne