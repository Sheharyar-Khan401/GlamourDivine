import ReactDom from "react-dom";
import React,{useEffect,useState} from "react";
import pic1 from "../../../assets/images/categoryPics/sports/pic1.jpg"
import pic2 from "../../../assets/images/categoryPics/sports/pic2.jpg"
import pic3 from "../../../assets/images/categoryPics/sports/pic3.jpg"
import pic4 from "../../../assets/images/categoryPics/sports/pic4.jpg"
import pic5 from "../../../assets/images/categoryPics/sports/pic5.jpg"
import pic6 from "../../../assets/images/categoryPics/sports/pic6.jpg"
import pic7 from "../../../assets/images/categoryPics/sports/pic7.jpg"
import pic8 from "../../../assets/images/categoryPics/sports/pic8.jpg"
import pic9 from "../../../assets/images/categoryPics/sports/pic9.jpg"
import pic10 from "../../../assets/images/categoryPics/sports/pic10.jpg"

import { Button, Card, Col, Typography, Row } from 'antd';


const SportsOutdoors = () => {
    const { Meta } = Card;
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [marginTop, setMarginTop] = useState('185px');

    useEffect(() => {
        if (windowDimensions.width < 650) {
            setMarginTop('22px')
        }
    }, [windowDimensions])

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <Col style={{ position: 'relative', margin: 'auto', width: '100%' }}>
                <Row gutter={16} style={{ marginTop: marginTop }}>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic1} />}
                        >
                            <Meta description={<h5>
                                peedo Adult Unisex Long Hair Swimming Cap
                                </h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic2} />}
                        >
                            <Meta description={<h5>TOPLUS Swimming Goggles, No Leaking Anti Fog UV Protection Swim Goggles Soft Silicone Nose Bridge for Men, Women, Junior, Kids</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic3} />}
                        >
                            <Meta description={<h5>Speedo Adult Unisex Futura Biofuse Flexiseal Swimming Goggle </h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic4} />}
                        >
                            <Meta description={<h5>Xiabing Classic Lightweight Lycraspandex Ski Bicycle Sports Balaclava Helmet</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic5} />}
                        >
                            <Meta description={<h5>Srixon Distance Mens Golf Balls - 12 Pack</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic6} />}
                        >
                            <Meta description={<h5>Shanker Golf Balls - Rude Branded Horrible Balls - Funny Joke Gift for Golfers (Sleeve of 3, Novelty, Playing Quality</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic7} />}
                        >
                            <Meta description={<h5>TaylorMade TP5x pix Golf Balls 2021,One Size</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic8} />}
                        >
                            <Meta description={<h5>Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate & up to 10 Days</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic9} />}
                        >
                            <Meta description={<h5>LED Head Torch, [2 Pack] Gritin COB Headlamp Super Bright Headlight, Adjustable with 3 Modes, Lightweight for Running, Camping, Fishing [Energy Class A++]</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic10} />}
                        >
                            <Meta description={<h5>Lifesystems Reusable Hand Warmers, Pack Of Two With 45 Minutes Of Heat, Perfect For Pockets When Camping, Hiking, Skiing Or Walking</h5>} />
                        </Card>,
                    </Col>
                </Row>
            </Col>
        </>
    );
}
export default SportsOutdoors;