import React from "react";
import PropTypes from 'prop-types';

import CurrentForecast from "../../components/CurrentForescat/CurrentForescat";
import Details from '../../components/Details/Details'


import { Container, Row, Col } from "react-bootstrap";
import style from './Forest.module.css';

const Forecast = ({forecast}) => {
    return (
        
        <Container className={style.box}>
           <Row>
               <Col>
                   <div className={style.card}> 
                    <CurrentForecast  {... forecast.dayForecast}/> 
                   </div>
               </Col>
               <Col>
                   <div> 
                    <Details forecast={forecast.dayDetails}/>
                   </div>
               </Col>
               <Col>
                  Días de la semana {/* Upcoming Days */}
               </Col>
            </Row> 
        </Container>
    )
}

Forecast.protoTypes = {
    forecast : PropTypes.shape ({
        dayForecast: PropTypes.object,
        dayDetails: PropTypes.array
    })
}
export default Forecast;