import React from "react";
import styles from "./footer.module.css";
import { Col, Row } from "react-bootstrap";
import InformationElement from "./ui/information-element";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__header}>Contact</div>
      <div className={styles.footer__informationWrapper}>
        <Row>
          <Col md={7}>
            <InformationElement
              header={"Phone"}
              body={"+7 (499) 350-66-04"}
            />
          </Col>
          <Col md={5}>
            <InformationElement
              header={"Socials"}
              body={
                <>
                  <img
                    style={{ paddingRight: "20px" }}
                    src="./public/ic-instagram.png"
                    alt="Instagram"
                  />
                  <img src="./public/ic-whatsapp.png" alt="WhatsApp" />
                </>
              }
            />
          </Col>
          <Col md={7}>
            <InformationElement
              header={"Address"}
              body={"Dubininskaya Ulitsa, 96, Moscow, Russia, 115093"}
            />
          </Col>
          <Col md={5}>
            <InformationElement
              header={"Working Hours"}
              body={"24 hours a day"}
            />
          </Col>
        </Row>
      </div>
      <div className={styles.footer__locationImageWrapper}></div>
    </div>
  );
};

export default Footer;
