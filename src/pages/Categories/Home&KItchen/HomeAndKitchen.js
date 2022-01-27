import ReactDom from "react-dom";
import React,{useEffect,useState} from "react";
import pic1 from "../../../assets/images/categoryPics/home/pic1.jpg"
import pic2 from "../../../assets/images/categoryPics/home/pic2.jpg"
import pic3 from "../../../assets/images/categoryPics/home/pic3.jpg"
import pic4 from "../../../assets/images/categoryPics/home/pic4.jpg"
import pic5 from "../../../assets/images/categoryPics/home/pic5.jpg"
import pic6 from "../../../assets/images/categoryPics/home/pic6.jpg"
import pic7 from "../../../assets/images/categoryPics/home/pic7.jpg"
import pic8 from "../../../assets/images/categoryPics/home/pic8.jpg"
import pic9 from "../../../assets/images/categoryPics/home/pic9.jpg"
import pic10 from "../../../assets/images/categoryPics/home/pic10.jpg"

import { Button, Card, Col, Typography, Row } from 'antd';


const HomeKitchen = () => {
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
                                Bostik Blu Tack, Multipurpose Reusable Adhesive, Clean, Safe & Easy to Use, Non-Toxic, Handy Size                            </h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic2} />}
                        >
                            <Meta description={<h5>DELONGHI DESCALER ECODECALK DLSC500 Bottle 500ml (Pack of 1)</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic3} />}
                        >
                            <Meta description={<h5>Command Medium Picture Mounting Strips, Pack of 12 x 2 Adhesive Strips, White - Damage Free Hanging - For Pictures, Frames, Mirrors, Wall décor and Signs </h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic4} />}
                        >
                            <Meta description={<h5>Calgon 3-in-1 Washing Machine Water Softener Tablets, 75 Tabs</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic5} />}
                        >
                            <Meta description={<h5>Frog Tape Green Multi Surface Painters Masking Tape, Indoor Painting and Decorating For Sharp Lines and No Paint Bleed 36mm X 41.1m</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic6} />}
                        >
                            <Meta description={<h5>BIC 4 Colours Original, Retractable Ballpoint Pens, Multi-coloured Medium Point (1.0mm), Pack of 3</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic7} />}
                        >
                            <Meta description={<h5>Breville Blend Active Personal Blender & Smoothie Maker with 2 Portable Blending Bottles (600ml), 300W, Green [VBL062]</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic8} />}
                        >
                            <Meta description={<h5>Henry NVM-1CH/907075 HepaFlo Vacuum Bags, Pack of 10</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic9} />}
                        >
                            <Meta description={<h5>Flash Speedmop Starter Kit, Mop + 12 Absorbing Refill Pads, Fresh</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic10} />}
                        >
                            <Meta description={<h5>Finish All-in-One Max Dishwasher Tablets, LEMON, 90 Tablets</h5>} />
                        </Card>,
                    </Col>
                </Row>
            </Col>
        </>
    );
}
export default HomeKitchen;