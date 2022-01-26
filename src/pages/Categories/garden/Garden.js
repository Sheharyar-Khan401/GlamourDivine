import ReactDom from "react-dom";
import React from "react";
import pic1 from "../../../assets/images/categoryPics/garden/pic1.jpg"
import pic2 from "../../../assets/images/categoryPics/garden/pic2.jpg"
import pic3 from "../../../assets/images/categoryPics/garden/pic3.jpg"
import pic4 from "../../../assets/images/categoryPics/garden/pic4.jpg"
import pic5 from "../../../assets/images/categoryPics/garden/pic5.jpg"
import pic6 from "../../../assets/images/categoryPics/garden/pic6.jpg"
import pic7 from "../../../assets/images/categoryPics/garden/pic7.jpg"
import pic8 from "../../../assets/images/categoryPics/garden/pic8.jpg"
import pic9 from "../../../assets/images/categoryPics/garden/pic9.jpg"
import pic10 from "../../../assets/images/categoryPics/garden/pic10.jpg"

import { Button, Card, Col, Typography, Row } from 'antd';


const Garden = () => {
    const { Meta } = Card;
    return (
        <>
            <Col style={{ position: 'relative', margin: 'auto', width: '80%' }}>
                <Row style={{ marginTop: '185px' }}>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic1} />}
                        >
                            <Meta description={<h5>
                                Patio Magic! 16492 Concentrate: Ideal for Patios, Paths and Driveways (Kills Algae and Lichens), 5 Litres
                            </h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic2} />}
                        >
                            <Meta description={<h5>Orchid Focus Repotting Mix 3 Litre</h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic3} />}
                        >
                            <Meta description={<h5>Miracle-Gro 119897 Pump & Feed' All Purpose Plant Food, 200 ml, Clear</h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic4} />}
                        >
                            <Meta description={<h5>Westland 10200054 Cacti/Succulent Potting Compost Mix and Enriched with Seramis, 4 liters, Brown</h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic5} />}
                        >
                            <Meta description={<h5>Lepro 20W Security Lights Outdoor Motion Sensor, 1700 Lumen PIR Light, IP65 Waterproof Motion Sensor Flood Light, Ultra Thin Garden Light Security Perfect for Forecourt, Backyard, Garages and More</h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic6} />}
                        >
                            <Meta description={<h5>B-Free Humane Mouse Traps for Indoors &Outdoors. Live Catch & Release. Pets & Children Friendly. Washable, Reusable Rat Rodent Trap</h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic7} />}
                        >
                            <Meta description={<h5>Extra Select Seed Mix Wild Bird Food, 5 Litre</h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic8} />}
                        >
                            <Meta description={<h5>Spear & Jackson 5LPAPS Pump Action Pressure Sprayer 5 Litre</h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic9} />}
                        >
                            <Meta description={<h5>UniGLOVES GP0033 pearl powder-free nitrile glove, black, medium, 100 pieces</h5>} />
                        </Card>,
                    </Col>
                    <Col lg={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={pic10} />}
                        >
                            <Meta description={<h5>Baby Bio 86600241 Houseplant Bug Killer, 1 L</h5>} />
                        </Card>,
                    </Col>
                </Row>
            </Col>
        </>
    );
}
export default Garden;