import ReactDom from "react-dom";
import React,{useState,useEffect} from "react";
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
                                Patio Magic! 16492 Concentrate: Ideal for Patios, Paths and Driveways (Kills Algae and Lichens), 5 Litres
                            </h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic2} />}
                        >
                            <Meta description={<h5>Orchid Focus Repotting Mix 3 Litre</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic3} />}
                        >
                            <Meta description={<h5>Miracle-Gro 119897 Pump & Feed' All Purpose Plant Food, 200 ml, Clear</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic4} />}
                        >
                            <Meta description={<h5>Westland 10200054 Cacti/Succulent Potting Compost Mix and Enriched with Seramis, 4 liters, Brown</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic5} />}
                        >
                            <Meta description={<h5>Lepro 20W Security Lights Outdoor Motion Sensor, 1700 Lumen PIR Light, IP65 Waterproof Motion Sensor Flood Light, Ultra Thin Garden Light Security Perfect for Forecourt, Backyard, Garages and More</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic6} />}
                        >
                            <Meta description={<h5>B-Free Humane Mouse Traps for Indoors &Outdoors. Live Catch & Release. Pets & Children Friendly. Washable, Reusable Rat Rodent Trap</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic7} />}
                        >
                            <Meta description={<h5>Extra Select Seed Mix Wild Bird Food, 5 Litre</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic8} />}
                        >
                            <Meta description={<h5>Spear & Jackson 5LPAPS Pump Action Pressure Sprayer 5 Litre</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
                            cover={<img alt="example" src={pic9} />}
                        >
                            <Meta description={<h5>UniGLOVES GP0033 pearl powder-free nitrile glove, black, medium, 100 pieces</h5>} />
                        </Card>,
                    </Col>
                    <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
                        <Card
                            hoverable
                            style={{ width: windowDimensions.width > 659 ? 240 : "100%", margin: 'auto' }}
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


{/* <Row  gutter={16} style={{ marginTop: marginTop }}>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : '100%',margin:'auto' }}
              cover={<img alt="example" src={gocat} />}
            >
              <Meta description={
                <Col xs={24} sm={24}>
                  <h5>GO CAT ADULT Chicken & Duck Dry Cat Food, 10kg</h5>
                </Col>
              } />
            </Card>,
          </Col>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : "100%",margin:'auto'}}
              cover={<img alt="example" src={iams} />}
            >
              <Col xs={24} sm={24}>
              <h5>IAMS for Vitality Indoor Dry Cat Food with Fresh Chicken for Adult and Senior Cats, 3 kg</h5>
              </Col>
            </Card>,
          </Col>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : "100%",margin:'auto' }}
              cover={<img alt="example" src={whiskas} />}
            >
              <Meta description={<h5>Whiskas 1+ Cat Complete Dry Chicken 7kg</h5>} />
            </Card>,
          </Col>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : "100%",margin:'auto' }}
              cover={<img alt="example" src={pedigree} />}
            >
              <Meta description={<h5>Pedigree DentaStix - Daily Dental Chews For Large Dogs 25kg+, 112 Sticks</h5>} />
            </Card>,
          </Col>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : "100%",margin:'auto' }}
              cover={<img alt="example" src={iams2} />}
            >
              <Meta description={<h5>IAMS for Vitality Senior Dry Cat Food with Fresh Chicken, 3 kg</h5>} />
            </Card>,
          </Col>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : "100%",margin:'auto' }}
              cover={<img alt="example" src={iokheria} />}
            >
              <Meta description={<h5>Iokheira Cat Ball Interactive Cat Toys for Indoor Cats Wicked Ball Kitten Toys with Bell Feather Built-in Catnip, USB Rechargeable Automatic 360° Rotating Cat Toy balls with LED Light</h5>} />
            </Card>,
          </Col>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : "100%",margin:'auto' }}
              cover={<img alt="example" src={fiftypcs} />}
            >
              <Meta description={<h5>50 Pcs Assorted Dog Hair Bows with Elastic Rubber Bands,Cute Patterns Hair Grooming Accessories for Small Dog Cat Puppy</h5>} />
            </Card>,
          </Col>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : "100%",margin:'auto' }}
              cover={<img alt="example" src={rosewood} />}
            >
              <Meta description={<h5>Rosewood Naturals Carrot and Fennel Sticks Treat 120 g</h5>} />
            </Card>,
          </Col>
          <Col style={{ margin: 'auto' }} sm={11} xs={11} lg={8}>
            <Card
              hoverable
              style={{ width: windowDimensions.width > 659 ? 240 : "100%",margin:'auto' }}
              cover={<img alt="example" src={pics2} />}
            >
              <Meta description={<h5>back-2-nature Small Animal Bedding and Litter 30L [Energy Class B]</h5>} />
            </Card>,
          </Col>
        </Row> */}