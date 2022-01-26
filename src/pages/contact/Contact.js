import ReactDom from "react-dom";
import React from "react";
import "./contact.css"
import { Button, Carousel, Col, Typography, Row, Layout } from 'antd';
import { useHistory } from "react-router-dom";

const Contact = () => {
   return (
      <>
         <Col className="main" lg={24}>
            <Col className="contact-div" lg={21}>
               <div className="body">
                  <h2 style={{ textAlign: 'center' }}>HERE TO HELP</h2>
                  <p>Before getting in touch, please visit our FAQs page to see if you can find an answer to your query.

                     You can also find the latest information about store openings, returns, deliveries and Click & Collect on our Coronavirus page.

                     If you can't find an answer on our help pages, please get in touch with our customer care team via email at fescomltduk@gmail.com or call

                     at 07727269998 <br/>

                     You can also write to us at:

                     7 Moreton Avenue Wellingborough , 7
                     Moreton Avenue Wellingborough Northamptonshire, North Northamptonshire, NN8 2JE
                  </p>
               </div>
            </Col>
         </Col>
      </>
   )

}
export default Contact;