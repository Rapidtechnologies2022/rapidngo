import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function ContactOne() {

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    const validationSchema = yup.object({
        volunteerName: yup
            .string('Enter Volunteer Name')
            .required('Volunteer Name is required'),
        volunteerLastName: yup
            .string('Enter Volunteer Last Name')
            .required('Volunteer Last Name is required'),
        volunteerPhone: yup
            .string('Enter your Mobile No.')
            .min(10, 'Invalid Mobile No.')
            .max(10, 'Invalid Mobile No.')
            .required('Mobile No. is required'),
        volunteerAddress: yup
            .string('Enter Volunteer Address')
            .required('Volunteer Address is required'),
        volunteerEmail: yup
            .string('Enter Volunteer email')
            .email('Enter a valid email')
            .required('Email is required'),
        volunteerMessage: yup
            .string('Enter Message')
            .required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            volunteerName: '',
            volunteerLastName: '',
            volunteerEmail: '',
            volunteerPhone: '',
            volunteerAddress: '',
            volunteerMessage: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setLoading(true)
            axios({
                url: 'https://www.actionforms.io/e/r/rapidcontact',
                method: 'POST',
                data: values
            })
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        setLoading(false)
                        navigate('/success')
                    } else {
                        setLoading(false)
                    }

                })
                .catch((err) => {
                    setLoading(false)
                })

        },
    });

    return (
        <section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="section-head style-1">
                            {/*   <h6 className="sub-title bgl-primary m-b20 text-primary">Contact Us</h6> */}
                            <h2 className="title">Happiness doesn’t result from what we get,<span className="text-primary">but from what we give.</span></h2>
                            {/*   <h2 className="title">Happiness doesn’t result from what we get, but from what we give.</h2> */}
                        </div>
                        <form className="dlab-form dzForm">
                            <div className="dzFormMsg"></div>
                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="la la-user"></i></span>
                                        </div>
                                        <input
                                            name="volunteerName"
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            value={formik.values.volunteerName}
                                            onChange={formik.handleChange('volunteerName')}
                                            error={formik.touched.volunteerName && Boolean(formik.errors.volunteerName)}
                                            helpertext={formik.touched.volunteerName && formik.errors.volunteerName}
                                        />
                                    </div>
                                    {formik.errors.volunteerName ? <div style={{ color: 'red', marginTop: '-15px', marginLeft: '15px', marginBottom: '15px', fontSize: '12px' }} > {formik.errors.volunteerName} </div> : null}

                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="la la-user"></i></span>
                                        </div>
                                        <input
                                            name="volunteerLastName"
                                            type="text"
                                            className="form-control"
                                            required
                                            placeholder="Last Name"
                                            value={formik.values.volunteerLastName}
                                            onChange={formik.handleChange('volunteerLastName')}
                                            error={formik.touched.volunteerLastName && Boolean(formik.errors.volunteerLastName)}
                                            helpertext={formik.touched.volunteerLastName && formik.errors.volunteerLastName}
                                        />
                                    </div>
                                    {formik.errors.volunteerLastName ? <div style={{ color: 'red', marginTop: '-15px', marginLeft: '15px', marginBottom: '15px', fontSize: '12px' }} > {formik.errors.volunteerLastName} </div> : null}

                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="la la-envelope"></i></span>
                                        </div>
                                        <input
                                            name="volunteerEmail"
                                            type="text"
                                            required
                                            className="form-control"
                                            placeholder="Email Address"
                                            value={formik.values.volunteerEmail}
                                            onChange={formik.handleChange('volunteerEmail')}
                                            error={formik.touched.volunteerEmail && Boolean(formik.errors.volunteerEmail)}
                                            helpertext={formik.touched.volunteerEmail && formik.errors.volunteerEmail}
                                        />
                                    </div>
                                    {formik.errors.volunteerEmail ? <div style={{ color: 'red', marginTop: '-15px', marginLeft: '15px', marginBottom: '15px', fontSize: '12px' }} > {formik.errors.volunteerEmail} </div> : null}

                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="la la-phone"></i></span>
                                        </div>
                                        <input
                                            name="volunteerPhone"
                                            type="text" required
                                            className="form-control"
                                            placeholder="Phone No."
                                            value={formik.values.volunteerPhone}
                                            onChange={formik.handleChange('volunteerPhone')}
                                            error={formik.touched.volunteerPhone && Boolean(formik.errors.volunteerPhone)}
                                            helpertext={formik.touched.volunteerPhone && formik.errors.volunteerPhone}
                                        />
                                    </div>
                                    {formik.errors.volunteerPhone ? <div style={{ color: 'red', marginTop: '-15px', marginLeft: '15px', marginBottom: '15px', fontSize: '12px' }} > {formik.errors.volunteerPhone} </div> : null}

                                </div>
                                <div className="col-sm-12">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="la la-file-alt"></i></span>
                                        </div>
                                        <input
                                            name="volunteerAddress"
                                            type="text"
                                            className="form-control"
                                            required
                                            placeholder="Enter Address"
                                            value={formik.values.volunteerAddress}
                                            onChange={formik.handleChange('volunteerAddress')}
                                            error={formik.touched.volunteerAddress && Boolean(formik.errors.volunteerAddress)}
                                            helpertext={formik.touched.volunteerAddress && formik.errors.volunteerAddress}
                                        />
                                    </div>
                                    {formik.errors.volunteerAddress ? <div style={{ color: 'red', marginTop: '-15px', marginLeft: '15px', marginBottom: '15px', fontSize: '12px' }} > {formik.errors.volunteerAddress} </div> : null}

                                </div>

                                <div className="col-sm-12">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="la la-sms"></i></span>
                                        </div>
                                        <textarea
                                            name="volunteerMessage"
                                            required className="form-control"
                                            placeholder="Message"
                                            value={formik.values.volunteerMessage}
                                            onChange={formik.handleChange('volunteerMessage')}
                                            error={formik.touched.volunteerMessage && Boolean(formik.errors.volunteerMessage)}
                                            helpertext={formik.touched.volunteerMessage && formik.errors.volunteerMessage}
                                        >
                                        </textarea>
                                    </div>
                                    {formik.errors.volunteerMessage ? <div style={{ color: 'red', marginTop: '-15px', marginLeft: '15px', marginBottom: '15px', fontSize: '12px' }} > {formik.errors.volunteerMessage} </div> : null}

                                </div>
                                {/* <div className="col-sm-12">
                                    <div className="input-group">
                                        <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                        <input className="form-control d-none" style={{ "display": "none" }} data-recaptcha="true" required data-error="Please complete the Captcha" />
                                    </div>
                                </div> */}
                                <div className="col-sm-12 mt-2">
                                    <button name="submit" onClick={formik.handleSubmit} className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m-r10"></i>Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="dlab-media cf-r-img">
                            <img src="/images/icon/43054.jpg" className="move-1" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactOne