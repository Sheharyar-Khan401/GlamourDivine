import ReactDom from "react-dom";
import React, { useState } from "react";
import "./header.css"
import { Row, Col, Input, Layout } from "antd";
import { useHistory } from "react-router-dom";
import { AudioOutlined, UserOutlined, HeartOutlined,SearchOutlined } from '@ant-design/icons';


const Header = (props) => {
    let history = useHistory();
    const { Header, Content, Footer } = Layout;
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    return (
        <>
            <Layout>
                <Header className="header">
                    <Row style={{textAlign:'center'}}>
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
                            About us
                        </Col>
                        <Col className="textcenter" lg={1}><HeartOutlined /></Col>
                    </Row>
                    <Row className="navigation" style={{ textAlign: 'center'}}>
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
                            <div className="kitchen-div"><a href="/category-pets">Home & Kitchen</a></div>
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
            </Layout>
        </>
    )
}
export default Header;