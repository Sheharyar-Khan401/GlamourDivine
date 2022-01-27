import ReactDom from "react-dom";
import React, { useState, useEffect } from "react";
import "./header.css"
import { Row, Col, Input, Layout, Space, Radio, Drawer, Button, Divider } from "antd";
import { useHistory } from "react-router-dom";
import { AudioOutlined, UserOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';


const Header = (props) => {
    let history = useHistory();
    const { Header, Content, Footer } = Layout;
    const { Search } = Input;
    const [visible, setVisible] = useState(false)
    const [placement, setPlacement] = useState('left')
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
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

    const onClose = () => {
        setVisible(false);
    };
    const showDrawer = () => {
        setVisible(true);
    };

    return (
        <>
            {windowDimensions.width > 650 ?
                <Layout>
                    <Header className="header">
                        <Row style={{ textAlign: 'center' }}>
                            <Col lg={2} className="logo">GD.</Col>
                            <Col className="serch-div" lg={7} >
                                <Search
                                    className="search"
                                    placeholder="input search text"
                                    enterButton={<SearchOutlined />}
                                    size="large"
                                // suffix={suffix}
                                // onSearch={onSearch}
                                />
                            </Col>
                            <Col className="textcenter" lg={2} offset={5}>
                                <UserOutlined />Account
                            </Col>
                            <Col className="textcenter" lg={2}>
                                Help
                            </Col>
                            <Col className="textcenter" lg={2}>
                                <a href="/contact">Contact us</a>
                            </Col>
                            <Col className="textcenter" lg={2}>
                                <a href="/about-us">About us</a>
                            </Col>
                            <Col className="textcenter" lg={1}><HeartOutlined /></Col>
                        </Row>
                        <Row className="navigation" style={{ textAlign: 'center' }}>
                            <Col lg={2}>
                                <div className="home-div"><a href="/home">Home</a></div>
                            </Col>
                            <Col lg={2}>
                                <div className="beauty-div"><a href="/category-beauty">Beauty</a></div>
                            </Col>
                            <Col lg={2}>
                                <div className="pet-div"><a href="/category-pets">Pet</a></div>
                            </Col>
                            <Col lg={2}>
                                <div className="grocery-div"><a href="/category-grocery">Grocery</a></div>
                            </Col>
                            <Col lg={3}>
                                <div className="kitchen-div"><a href="/category-home">Home & Kitchen</a></div>
                            </Col>
                            <Col lg={2}>
                                <div className="garden-div"><a href="/category-garden">Garden</a></div>
                            </Col>
                            <Col lg={3}>
                                <div className="sports-div"><a href="/category-pets">Sports & Outdoors</a></div>
                            </Col>
                            <Col lg={7}>
                                <div className="brand-name">*Glamour Divine*</div>
                            </Col>
                        </Row>
                    </Header>
                </Layout> :
                <>
                    <Col xs={24} sm={24} className="mobile-header">
                        <Row>
                        <Col xs={4}>
                        <Button type="primary" onClick={showDrawer}>
                            Menu
                        </Button>
                        </Col>
                        <Col xs={19}>
                        <div className="mobile-heading">Glamour Divine</div>
                        </Col>
                        </Row>
                    </Col>
                    <Drawer
                        title="Glamour Divine"
                        placement={placement}
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                        width={250}
                        className="drawer"
                        // style={{width:'100px'}}
                        key={placement}
                    >
                        <div className="mobile-menu-div"><a href="/home">Home</a></div>
                        <div className="mobile-menu-div"><a href="/category-beauty">Beauty</a></div>
                        <div className="mobile-menu-div"><a href="/category-pets">Pet</a></div>
                        <div className="mobile-menu-div"><a href="/category-grocery">Grocery</a></div>
                        <div className="mobile-menu-div"><a href="/category-home">Home & Kitchen</a></div>
                        <div className="mobile-menu-div"><a href="/category-garden">Garden</a></div>
                        <div className="mobile-menu-div"><a href="/category-sports">Sports & Outdoors</a></div>
                        <br/>
                        <div className="mobile-menu-div-bottom"><a href="/contact">Contact us</a></div>
                        <div className="mobile-menu-div-bottom"><a href="/about-us">About us</a></div>

                    </Drawer>
                </>
            }
        </>
    )
}
export default Header;