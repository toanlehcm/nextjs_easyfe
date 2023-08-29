import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
// import "@google/model-viewer/dist/model-viewer";

import "bootstrap/dist/css/bootstrap.min.css";
import viewer3DStyles from "./Viewer3DStyle.module.scss";

import { TITLE_PAGE, DIAMOND_SHAPE_TITLE, DIAMOND_SHAPE_LIST, CARAT_SIZE_TITLE, CARAT_SIZE_LIST, TOP_RECOMMENDATION, SOLITAIRE_RINGS_TITLE, SOLITAIRE_RINGS_LIST, ROMANCE_RINGS_TITLE, ROMANCE_RINGS_LIST, PENDANTS_TITLE, PENDANTS_LIST, EARRINGS_TITLE, EARRINGS_LIST, BUTTON_SELECT, ENVIRONMENT_TEST, GROUP_DETAIL_TEXT } from "../../src/constants/Viewer3D.js";

export interface Viewer3DPageProps {}

export default function Viewer3DPage(props: Viewer3DPageProps) {
  // useEffect(() => { import('@google/model-viewer').catch(console.error); }, []);

  var [srcModel3D, setSrcModel3D] = useState(SOLITAIRE_RINGS_LIST[0].model3D);

  var [diamondLabel, setDiamondLabel] = useState(SOLITAIRE_RINGS_LIST[0].label);

  var [diamondDescription, setDiamondDescription] = useState(SOLITAIRE_RINGS_LIST[0].description);

  var [diamondMaintenance, setDiamondMaintenance] = useState(SOLITAIRE_RINGS_LIST[0].maintenance);

  var [diamondUniqueness, setDiamondUniqueness] = useState(SOLITAIRE_RINGS_LIST[0].uniqueness);

  var [diamondComfort, setDiamondComfort] = useState(SOLITAIRE_RINGS_LIST[0].comfort);

  var [isDiamondSelected, setIsDiamondSelected] = useState(true);

  // const [diamond1, setDiamond1] = useState(null);

  // const [diamond2, setDiamond2] = useState(null);

  const changeSrcModel3D = (element) => {
    // Check the number of diamonds being selected. It is not allowed to select more than 2 diamonds.

    // Toggle style diamond selected.

    // var  slides = document.querySelectorAll(".slide");

    // slides.forEach((element) => { element.classList.remove("selected"); });

    // element.classList.add("selected");

    // Change src model 3D.
    setSrcModel3D(element.model3D);

    // Change diamond label.
    setDiamondLabel(element.label);

    // Change description.
    setDiamondDescription(element.description);

    // Change rating.
    setDiamondMaintenance(element.maintenance);

    setDiamondUniqueness(element.uniqueness);

    setDiamondComfort(element.comfort);
  };

  return (
    <>
      <Container className={viewer3DStyles.container_page}>
        <Row>
          <Col className={viewer3DStyles.titlePage}> {TITLE_PAGE}</Col>
        </Row>

        {/* --- Diamond Shape. --- */}
        <Row className={viewer3DStyles.container_diamond_recommended}>
          <Col xs="12" className={viewer3DStyles.title_diamond_shape}>
            {DIAMOND_SHAPE_TITLE}
          </Col>

          {DIAMOND_SHAPE_LIST.map((diamondShape) => {
            return (
              <Col xs="2" key={diamondShape.id}>
                <img id={diamondShape.id} src={diamondShape.image} className={viewer3DStyles.img_diamond_shape} alt={diamondShape.alt} />
                <p className={viewer3DStyles.diamond_recommended_label}>{diamondShape.label}</p>
              </Col>
            );
          })}

          <Col xs="12" className="d-flex justify-content-center">
            <Col xs="6" className={viewer3DStyles.diamond_recommended_bar}>
              <Col xs="4" className=""></Col>
              <Col xs="4" className={viewer3DStyles.diamond_recommended_selected}></Col>
              <Col xs="4" className=""></Col>
            </Col>
          </Col>

          <Col xs="12">
            <p>{TOP_RECOMMENDATION}</p>
          </Col>
        </Row>

        {/* --- Carat Size. --- */}
        <Row className={viewer3DStyles.container_diamond_recommended}>
          <Col xs="12" className={viewer3DStyles.title_carat_size}>
            {CARAT_SIZE_TITLE}
          </Col>

          {CARAT_SIZE_LIST.map((caratSize) => {
            return (
              <Col xs="2" key={caratSize.id}>
                <img id={caratSize.id} src={caratSize.image} className={viewer3DStyles.img_diamond_shape} alt={caratSize.alt} />
                <p className={viewer3DStyles.diamond_recommended_label}>{caratSize.label}</p>
              </Col>
            );
          })}

          <Col xs="12" className="d-flex justify-content-center">
            <Col xs="6" className={viewer3DStyles.diamond_recommended_bar}>
              <Col xs="4" className=""></Col>
              <Col xs="4" className={viewer3DStyles.diamond_recommended_selected}></Col>
              <Col xs="4" className=""></Col>
            </Col>
          </Col>

          <Col xs="12">
            <p>{TOP_RECOMMENDATION}</p>
          </Col>
        </Row>

        {/* --- Category diamond. --- */}
        <Row className={viewer3DStyles.container_diamond_category_description}>
          <Col xs="7" id="container_diamond_category">
            {/* --- Solitaire Rings --- */}
            <Row>
              <Col xs="12" className={viewer3DStyles.title_category}>
                {SOLITAIRE_RINGS_TITLE}
              </Col>

              {SOLITAIRE_RINGS_LIST.map((solitaireRing) => {
                return (
                  <Col xs="3" key={solitaireRing.id} onClick={() => changeSrcModel3D(solitaireRing)}>
                    <img
                      id={solitaireRing.id}
                      src={solitaireRing.image}
                      className={` 
                    ${isDiamondSelected ? `${viewer3DStyles.img_diamond_shape} ${viewer3DStyles.diamond_selected}` : viewer3DStyles.img_diamond_shape}`}
                      alt={solitaireRing.alt}
                    />
                    <p>{solitaireRing.label}</p>
                  </Col>
                );
              })}
            </Row>

            {/* --- Romance Rings --- */}
            <Row>
              <Col xs="12" className={viewer3DStyles.title_category}>
                {ROMANCE_RINGS_TITLE}
              </Col>

              {/* {SOLITAIRE_RINGS_LIST.map((diamond) => <div onClick={() => setDiamond1(diamond)} style={{ background: (diamond1 && diamond.label === diamond1.label) ? 'red' : 'white' }}>{diamond.label}</div>)} */}

              {ROMANCE_RINGS_LIST.map((romanceRing) => {
                return (
                  <Col xs="3" key={romanceRing.id} onClick={() => changeSrcModel3D(romanceRing)}>
                    <img id={romanceRing.id} src={romanceRing.image} className={viewer3DStyles.img_diamond_shape} alt={romanceRing.alt} />
                    <p>{romanceRing.label}</p>
                  </Col>
                );
              })}
            </Row>

            {/* --- Pendants --- */}
            <Row>
              <Col xs="12" className={viewer3DStyles.title_category}>
                {PENDANTS_TITLE}
              </Col>

              {PENDANTS_LIST.map((pendant) => {
                return (
                  <Col xs="3" key={pendant.id} onClick={() => changeSrcModel3D(pendant)}>
                    <img id={pendant.id} src={pendant.image} className={viewer3DStyles.img_diamond_shape} alt={pendant.alt} />
                    <p>{pendant.label}</p>
                  </Col>
                );
              })}
            </Row>

            {/* --- Earrings --- */}
            <Row>
              <Col xs="12" className={viewer3DStyles.title_category}>
                {EARRINGS_TITLE}
              </Col>

              {EARRINGS_LIST.map((earring) => {
                return (
                  <Col xs="3" key={earring.id} onClick={() => changeSrcModel3D(earring)}>
                    <img id={earring.id} src={earring.image} className={viewer3DStyles.img_diamond_shape} alt={earring.alt} />
                    <p>{earring.label}</p>
                  </Col>
                );
              })}
            </Row>

            {/* --- Button select. --- */}
            <Col xs="12" className={viewer3DStyles.container_button_select}>
              <Button className={viewer3DStyles.text_button_select}>{BUTTON_SELECT.offTheShelf}</Button>
              <Button className={viewer3DStyles.text_button_select}>{BUTTON_SELECT.retakeTest}</Button>
            </Col>
          </Col>

          <Col xs="5"></Col>
        </Row>
      </Container>
    </>
  );
}
