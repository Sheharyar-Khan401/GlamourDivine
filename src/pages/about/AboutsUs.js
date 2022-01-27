import ReactDom from "react-dom";
import React,{useState,useEffect} from "react";
import './about.css';
import { Button, Carousel, Col, Typography, Row, Layout } from 'antd';
import { useHistory } from "react-router-dom";

const Aboutus = () => {
    const [marginTop,setMarginTop] = useState('130px');
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

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
        <div style={{ marginTop: windowDimensions.width>659? marginTop:'40px' }}>
            <Col style={{margin:'auto'}} xs={20} sm={20} md={20} lg={20}>
                <h2>What do we do?</h2>
                <p>Our Organization offer firsthand knowledge and advice surrounding e-Commerce. As e-Commerce experts, we lend our years of experience to consulting businesses on everything from marketing strategy and conversion optimization to user experience.</p>
                <h2>Our Objective</h2>
                <p>Developing business relations with clients, providing them a unique customer experience & scaling their Ecommerce Businesses. We do manage Amazon and eBay store in both modules either its wholesale or Private label. Our Specialized staff would be handling below mentioned modules and services.</p>
                <h2>Our Services</h2>
                <Row>
                <Col lg={12}>
                    <ul>
                        <h4>Wholesale</h4>
                        <li>Product Research & Product Analysis</li>
                        <li>Competitor Analysis </li>
                        <li>Brand approvals, </li>
                        <li>Searching suppliers/distributors</li>
                        <li>price adjustment </li>
                        <li>Buybox winning Strategies</li>
                        <li>Seller Central Management</li>
                        <li>inventory management</li>
                    </ul>
                </Col>
                <Col lg={12}>
                    <ul>
                        <h4>Private Label Services</h4>
                        <li>Product Research & Product Analysis</li>
                        <li>Product Listing</li>
                        <li>Listing Analysis </li>
                        <li>Listing Optimization & Indexing.</li>
                        <li>Content</li>
                        <li>Marketing Campaigns Including PPC.</li>
                        <li>Ranking</li>
                        <li>Seller Central Management </li>
                        <li>Inventory Management</li>
                        <li>Refunds & Returns Management.</li>
                    </ul>
                </Col>
                </Row>
            </Col>
        </div>
    )
}

export default Aboutus;