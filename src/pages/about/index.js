import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout1,
  dataabout2,
  meta,
  worktimeline,
  technologies,
  services,
  soft_skills,
  formation,
  langues,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Profil</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">{dataabout1.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout1.aboutme}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">{dataabout2.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout2.aboutme}</p>
            </div>
          </Col>
        </Row>




        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">parcours</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
{/*        
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">compétences</h3>
          </Col>
 
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>

        </Row>

*/}

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">langages et technologies</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
{/*
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
*/}

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">soft-skills</h3>
          </Col>
          <Col lg="17">
            {soft_skills.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>



        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">formation</h3>
          </Col>
          <Col lg="17">
            {formation.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>


        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">langues</h3>
          </Col>
          <Col lg="17">
            {langues.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>



      </Container>
    </HelmetProvider>
  );
};
