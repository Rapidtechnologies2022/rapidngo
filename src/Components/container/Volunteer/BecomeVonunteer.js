import React from 'react'

function BecomeVonunteer() {

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className="container mt-5 mb-3">
            <div className="section-head style-3 text-center">
                <h2 className="title">Volunteer Application</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                    <form className="dlab-form dzForm" method="POST" action="script/contact.php">
                        <div className="dzFormMsg"></div>
                        <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="la la-user"></i></span>
                                    </div>
                                    <input name="dzName" type="text" required className="form-control" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="la la-user"></i></span>
                                    </div>
                                    <input name="dzOther[last_name]" type="text" className="form-control" required placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="la la-envelope"></i></span>
                                    </div>
                                    <input name="dzEmail" type="text" required className="form-control" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="la la-phone"></i></span>
                                    </div>
                                    <input name="dzOther[phone]" type="text" required className="form-control" placeholder="Phone No." />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="la la-file-alt"></i></span>
                                    </div>
                                    <input name="dzOther[project_title]" type="text" className="form-control" required placeholder="Enter Address" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="la la-list"></i></span>
                                    </div>
                                    <select name="dzOther[choose_service]" className="form-control" required>
                                        <option selected>Choose Service</option>
                                        <option value="1">Regular Volunteer</option>
                                        <option value="2">Weekly Volunteer</option>
                                        <option value="3">Special Events Volunteer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="la la-sms"></i></span>
                                    </div>
                                    <textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="input-group">
                                    <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                    <input className="form-control d-none" style={{ "display": "none" }} data-recaptcha="true" required data-error="Please complete the Captcha" />
                                </div>
                            </div>
                            <div className="col-sm-12 mt-2">
                                <button name="submit" type="submit" value="Submit" className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m-r10"></i>Submit Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default BecomeVonunteer