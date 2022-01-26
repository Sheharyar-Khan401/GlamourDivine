import ReactDom from "react-dom";
import React from "react";
import "./Home.css"
import { Button, Carousel, Col, Typography, Row,Layout } from 'antd';
import { useHistory } from "react-router-dom";
import ocassion from "../../assets/images/occasion-banner-image-smaller.jpg"
import webcover2 from "../../assets/images/webcover2.jpg"
import kids from "../../assets/images/kids-value-fashion.webp"
import women from "../../assets/images/pets.jpg"
import men from "../../assets/images/beauty.webp"
import kidsFashion from "../../assets/images/garden.jpg"

const Home = () => {
    const history = useHistory();
    const { Text } = Typography;
    const { Header, Content, Footer } = Layout;
    const contentStyle = {
        height: 'auto',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const goto=()=>{
        history.push('/category-pets')
    }
    const goto2=()=>{
        history.push('/category-beauty')
    }
    return (
        <>
        <Content style={{position:'relative',marginTop:'125px'}}>
            <Carousel autoplay effect="fade">
                <div className="img-containerr">
                    <h3 style={contentStyle}><img className="image" src={webcover2}></img></h3>
                </div>
                <div className="img-containerr">
                    <h3 style={contentStyle}><img className="image" src={kids}></img></h3>
                </div>
                <div className="img-containerr">
                    <h3 style={contentStyle}><img className="image" src={webcover2}></img></h3>
                </div>
                <div className="img-containerr">
                    <h3 style={contentStyle}><img className="image" src={ocassion}></img></h3>
                </div>
            </Carousel>
            <Col className="shop-offer-btn-div"><Button className="shop-offer-btn" size="large">Shop the Offer</Button></Col>
            <Col className="shop-by-text"><Text>Shop by Category</Text></Col>
            <Row>
                <Col lg={8}>
                    <div className="catergory-cover-div">
                        <img src={women}></img>
                    </div>
                    <div className="text-center">
                        <Button className="category-btn" onClick={goto}>Pets</Button>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="catergory-cover-div">
                        <img src={men} />
                    </div>
                    <div className="text-center"><Button className="category-btn" onClick={goto2}>Beauty</Button></div>
                </Col>
                <Col lg={8}>
                    <div className="catergory-cover-div">
                        <img src={kidsFashion} />
                    </div>
                    <div className="text-center"><Button className="category-btn" onClick={()=>history.push('/category-garden')}>Garden</Button></div>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <div className="catergory-cover-div">
                        <img src={women}></img>
                    </div>
                    <div className="text-center">
                        <Button className="category-btn" onClick={()=>history.push('/category-grocery')}>Grocery</Button>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="catergory-cover-div">
                        <img src={men} />
                    </div>
                    <div className="text-center"><Button className="category-btn">Men</Button></div>
                </Col>
                <Col lg={8}>
                    <div className="catergory-cover-div">
                        <img src={kidsFashion} />
                    </div>
                    <div className="text-center"><Button className="category-btn">Kids</Button></div>
                </Col>
            </Row>
            </Content>
        </>
    );
}
export default Home;


