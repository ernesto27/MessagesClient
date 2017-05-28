import React, {Component} from 'react';
import {FormGroup, InputGroup, FormControl, Col, ControlLabel} from 'react-bootstrap';

class Form extends Component{
    render(){
        return(
            <Col md={9} mdPush={2} style={{'position': 'fixed', 'bottom': 0}}>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Agregar comentario</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>
            </Col>
        );
    }

}


export default Form;
