import React from 'react'
import { Carousel } from 'react-bootstrap'
import SlideData from '../../../Data/HomeData/Slide.json'

export default function Slider() {
    return (
        <div>
            <Carousel variant="dark">
                {
                    SlideData.map((data, key) => (
                        <Carousel.Item key={key}>
                            <img
                                className="d-block slide-image"
                                src={data.image}
                                alt="Loading..."
                            />
                            <Carousel.Caption className="slide-caption">
                                <h5 className="caption-title" > {data.title} </h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }

            </Carousel>
        </div>
    )
}
