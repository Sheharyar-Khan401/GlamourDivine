import ReactDom from "react-dom";
import React, { useEffect, useState } from "react";
import "./Home.css"
import { Button, Carousel, Col, Typography, Row,Layout } from 'antd';
import { useHistory } from "react-router-dom";
import ocassion from "../../assets/images/occasion-banner-image-smaller.jpg"
import webcover2 from "../../assets/images/webcover2.jpg"
import kids from "../../assets/images/kids-value-fashion.webp"
import women from "../../assets/images/pets.jpg"
import men from "../../assets/images/beauty.webp"
import kidsFashion from "../../assets/images/garden.jpg"
import kitchen from "../../assets/images/kitchen.jpg"
import sports from "../../assets/images/sports.jpg"
import grocery from "../../assets/images/grocery.jpg"

const Home = () => {
    const history = useHistory();
    const { Text } = Typography;
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const { Header, Content, Footer } = Layout;
    const [marginTop,setMarginTop] = useState('130px');
    const [crouselHeight,setCrouselHeight] = useState('480px');
    const contentStyle = {
        height: windowDimensions.width>659?crouselHeight:'180px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#001529',
    };
    
    const goto=()=>{
        history.push('/category-pets')
    }
    const goto2=()=>{
        history.push('/category-beauty')
    }
    useEffect(()=>{
        if(windowDimensions.width < 650){
            setMarginTop('10px')
        }
    },[windowDimensions])

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
        <Content style={{position:'relative',marginTop:marginTop}}>
            <Col>
            <Carousel style={{objectFit:'contain'}} autoplay effect="fade">
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
            </Col>
            <Col className="shop-offer-btn-div"><Button className="shop-offer-btn" size="large">Shop the Offer</Button></Col>
            <Col className="shop-by-text"><Text>Shop by Category</Text></Col>
            <Row>
                <Col sm={24} xs={24} lg={8}>
                    <div className="catergory-cover-div">
                        <img src={women}></img>
                    </div>
                    <div className="text-center">
                        <Button className="category-btn" onClick={goto}>Pets</Button>
                    </div>
                </Col>
                <Col sm={24} xs={24} lg={8}>
                    <div className="catergory-cover-div">
                        <img src={men} />
                    </div>
                    <div className="text-center"><Button className="category-btn" onClick={goto2}>Beauty</Button></div>
                </Col>
                <Col sm={24} xs={24} lg={8}>
                    <div className="catergory-cover-div">
                        <img src={kidsFashion} />
                    </div>
                    <div className="text-center"><Button className="category-btn" onClick={()=>history.push('/category-garden')}>Garden</Button></div>
                </Col>
            </Row>
            <Row>
                <Col sm={24} xs={24} lg={8}>
                    <div className="catergory-cover-div">
                        <img src={grocery}></img>
                    </div>
                    <div className="text-center">
                        <Button className="category-btn" onClick={()=>history.push('/category-grocery')}>Grocery</Button>
                    </div>
                </Col>
                <Col sm={24} xs={24} lg={8}>
                    <div className="catergory-cover-div">
                        <img src={kitchen} />
                    </div>
                    <div className="text-center"><Button className="category-btn" onClick={()=>history.push('/category-home')}>Home & Kitchen</Button></div>
                </Col>
                <Col sm={24} xs={24} lg={8}>
                    <div className="catergory-cover-div">
                        <img src={sports} />
                    </div>
                    <div className="text-center"><Button className="category-btn" onClick={()=>history.push('/category-sports')}>Sports & Outdoors</Button></div>
                </Col>
            </Row>
            </Content>
        </>
    );
}
export default Home;


