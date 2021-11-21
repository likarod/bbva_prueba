import React from "react";
import PropTypes from 'prop-types';

import CurrentForecast from "../../components/CurrentForescat/CurrentForescat";
// import Details from '../../components/Details/Details'


import { Container, Row, Col } from "react-bootstrap";
import style from './Forest.module.css';

const Forecast = ({forecast}) => {
    return (
        
        <Container className={style.box}>
            {            console.log(forecast)}
           <Row>
               <Col xs={12} md={8}>
                   <div className={style.card}> 
                    <CurrentForecast  {... forecast.dayForecast}/> 
                   </div>
               </Col>
               <Col xs={12} md={8}>
                   <div className={style.card}> 
                    {/* <Details {...forecast.dayDetails}/> */}
                        Max
                        Mín
                        Humedad
                   </div>
               </Col>
               <Col xs={12} md={8}>
                   <div className={style.card}> 
                        ícono
                   </div>
               </Col>
               <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                  Días de la semana {/* Upcoming Days */}
               </Col>
            </Row> 
        </Container>
    )
}

Forecast.protoTypes = {
    forecast : PropTypes.shape ({
        dayForecast: PropTypes.object,
    })
}
export default Forecast;