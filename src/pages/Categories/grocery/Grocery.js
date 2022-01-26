import ReactDom from "react-dom";
import React from "react";
import pic1 from "../../../assets/images/categoryPics/grocey/pic1.jpg"
import pic2 from "../../../assets/images/categoryPics/grocey/pic2.jpg"
import pic3 from "../../../assets/images/categoryPics/grocey/pic3.jpg"
import pic4 from "../../../assets/images/categoryPics/grocey/pic4.jpg"
import pic5 from "../../../assets/images/categoryPics/grocey/pic5.jpg"
import pic6 from "../../../assets/images/categoryPics/grocey/pic6.jpg"
import pic7 from "../../../assets/images/categoryPics/grocey/pic7.jpg"
import pic8 from "../../../assets/images/categoryPics/grocey/pic8.jpg"
import pic9 from "../../../assets/images/categoryPics/grocey/pic9.jpg"
import pic10 from "../../../assets/images/categoryPics/grocey/pic10.jpg"

import { Button, Card, Col, Typography, Row } from 'antd';


const Grocery = () => {
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
        EasyGleam Mop and Bucket Set. Microfibre Flat Mop with Stainless Steel handle, Innovative Twin Chamber Bucket for WET & DRY use. 2 Reusable Pads Supplied, Suitable for all Floor Types
       </h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic2} />}
      >
       <Meta description={<h5>Comfort Dermatologically tested Pure suitable for the whole family's clothes Fabric Conditioner gentle next to sensitive skin 166 Wash 5 l</h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic3} />}
      >
       <Meta description={<h5>Dr Beckmann Carpet Stain Remover with Cleaning applicator/brush-650ml, White, 10 x 30 x 35 cm</h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic4} />}
      >
       <Meta description={<h5>Plenty Kitchen Towel, 6 White Rolls, 600 Sheets, 2-Ply Tissue</h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic5} />}
      >
       <Meta description={<h5>Domestos Original Thick Bleach 750ml, Packaging May Vary</h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic6} />}
      >
       <Meta description={<h5>Grenade Carb Killa High Protein and Low Carb Bar, 12 x 60 g - A Selection Box</h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic7} />}
      >
       <Meta description={<h5>Golden Swan White Vinegar for Cleaning, Pickling, Marinating & Cooking - Distilled White Vinegar- 5 Litre Bottle - Produced in The UK (1 Pack)</h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic8} />}
      >
       <Meta description={<h5>Round Vietnamese Rice paper 22cm 340g Summer Roll Goi Cuon Banh Trang Fresh Spring Roll</h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic9} />}
      >
       <Meta description={<h5>Kewpie Qp Mayonnaise 500g, F0656</h5>} />
      </Card>,
     </Col>
     <Col lg={8}>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={pic10} />}
      >
       <Meta description={<h5>Regina Blitz Household Towel, 8 Rolls, 560 Super-Sized Sheets, Triple Layered Strength</h5>} />
      </Card>,
     </Col>
    </Row>
   </Col>
  </>
 );
}
export default Grocery;