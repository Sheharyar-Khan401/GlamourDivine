import ReactDom from "react-dom";
import React from "react";
import "./pets.css";
import gocat from "../../../assets/images/categoryPics/gocat.jpg"
import iams from "../../../assets/images/categoryPics/iams.jpg"
import whiskas from "../../../assets/images/categoryPics/whiskas.jpg"
import pedigree from "../../../assets/images/categoryPics/pedigree.jpg"
import iams2 from "../../../assets/images/categoryPics/iams2.jpg"
import iokheria from "../../../assets/images/categoryPics/iokheria.jpg"
import fiftypcs from "../../../assets/images/categoryPics/fiftypcs.jpg"
import rosewood from "../../../assets/images/categoryPics/rosewood.jpg"
import pics2 from "../../../assets/images/categoryPics/pics2.jpg"
import pic3 from "../../../assets/images/categoryPics/pic3.jpg"

import { Button, Card, Col, Typography, Row } from 'antd';


const Pets = () => {
  const {Meta} = Card;
  return (
    <>
      <Col style={{ position: 'relative',margin:'auto',width:'80%' }}>
        <Row style={{marginTop:'185px'}}>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={gocat} />}
            >
              <Meta description={<h5>GO CAT ADULT Chicken & Duck Dry Cat Food, 10kg</h5>} />
            </Card>,
          </Col>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={iams} />}
            >
              <Meta description={<h5>IAMS for Vitality Indoor Dry Cat Food with Fresh Chicken for Adult and Senior Cats, 3 kg</h5>} />
            </Card>,
          </Col>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={whiskas} />}
            >
              <Meta description={<h5>Whiskas 1+ Cat Complete Dry Chicken 7kg</h5>} />
            </Card>,
          </Col>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={pedigree} />}
            >
              <Meta description={<h5>Pedigree DentaStix - Daily Dental Chews For Large Dogs 25kg+, 112 Sticks</h5>} />
            </Card>,
          </Col>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={iams2} />}
            >
              <Meta description={<h5>IAMS for Vitality Senior Dry Cat Food with Fresh Chicken, 3 kg</h5>} />
            </Card>,
          </Col>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={iokheria} />}
            >
              <Meta description={<h5>Iokheira Cat Ball Interactive Cat Toys for Indoor Cats Wicked Ball Kitten Toys with Bell Feather Built-in Catnip, USB Rechargeable Automatic 360° Rotating Cat Toy balls with LED Light</h5>} />
            </Card>,
          </Col>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={fiftypcs} />}
            >
              <Meta description={<h5>50 Pcs Assorted Dog Hair Bows with Elastic Rubber Bands,Cute Patterns Hair Grooming Accessories for Small Dog Cat Puppy</h5>} />
            </Card>,
          </Col>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={rosewood} />}
            >
              <Meta description={<h5>Rosewood Naturals Carrot and Fennel Sticks Treat 120 g</h5>} />
            </Card>,
          </Col>
          <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={pics2} />}
            >
              <Meta description={<h5>back-2-nature Small Animal Bedding and Litter 30L [Energy Class B]</h5>} />
            </Card>,
          </Col>
          {/* <Col lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={pic3} />}
            >
              <Meta description={<h5>back-2-nature Small Animal Bedding and Litter 30L [Energy Class B]</h5>} />
            </Card>,
          </Col> */}
        </Row>
      </Col>
    </>
  );
}
export default Pets;