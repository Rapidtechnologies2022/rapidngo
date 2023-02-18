import React from 'react'
import ReactPlayer from 'react-player'
import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';

const data = [

    {
        url: "/images/video/video01.mp4",
    },
    {
        url: "/images/video/video02.mp4",
    },
    {
        url: "/images/video/video03.mp4",
    },
];


const VideoOne = () => {

    return (
        <Container>
            <Row className='mt-4'>
                {
                    data.map((d) => (
                        <Col xl={4}>
                            <video src={d.url} controls className="video_gal"></video>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default VideoOne