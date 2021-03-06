import ReactDom from "react-dom";
import React, { useState, useEffect } from "react";
import pic1 from "../../../assets/images/categoryPics/beauty/pic1.jpg"
import pic2 from "../../../assets/images/categoryPics/beauty/pic2.jpg"
import pic3 from "../../../assets/images/categoryPics/beauty/pic3.jpg"
import pic4 from "../../../assets/images/categoryPics/beauty/pic4.jpg"
import pic5 from "../../../assets/images/categoryPics/beauty/pic5.jpg"
import pic6 from "../../../assets/images/categoryPics/beauty/pic6.jpg"
import pic7 from "../../../assets/images/categoryPics/beauty/pic7.jpg"
import pic8 from "../../../assets/images/categoryPics/beauty/pic8.jpg"
import pic9 from "../../../assets/images/categoryPics/beauty/pic9.jpg"
import pic10 from "../../../assets/images/categoryPics/beauty/pic10.jpg"

import { Button, Card, Col, Typography, Row } from 'antd';


const Beauty = () => {
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
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic1} />}
                        >
                            <Meta description={<h5>
                                Collection Cosmetics Gorgeous Glow Blush Block, Blush Powder Kit
                            </h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic2} />}
                        >
                            <Meta description={<h5>Cerave Micellar Cleansing Water |10oz / 295ml | Niacinamide & Ceramides for All Skin Types</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic3} />}
                        >
                            <Meta description={<h5>Collection Cosmetics, Incredibrow Eyebrow Kit, All-in-One Palette, Blonde</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic4} />}
                        >
                            <Meta description={<h5>Wilkinson Sword Eyebrow Razor Shaper Facial Hair Remover and Trimmer, Exfoliating Dermaplanning tool for Women and Men, 3 Pieces</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic5} />}
                        >
                            <Meta description={<h5>Sanctuary Spa Signature Showstopper Gift Set for Women, For Birthday, Christmas, Vegan and Cruelty Free</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic6} />}
                        >
                            <Meta description={<h5>Scholl Fungal Nail Treatment, 3.8 ml</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic7} />}
                        >
                            <Meta description={<h5>O'Keeffe's?? Working Hands?? 96g Jar</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic8} />}
                        >
                            <Meta description={<h5>Eylure DYBROW Eyebrow Dye Kit, Dark Brown</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic9} />}
                        >
                            <Meta description={<h5>OLAPLEX Hair Perfector No.3 Repairing Treatment</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : '100%', margin: 'auto' }}
                            cover={<img alt="example" src={pic10} />}
                        >
                            <Meta description={<h5>REVLON Pro Collection Salon One- Step Hair Dryer and Volumiser</h5>} />
                        </Card>,
                    </Col>
                </Row>
            </Col>
        </>
    );
}
export default Beauty;