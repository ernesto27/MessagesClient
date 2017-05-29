import React, {Component} from 'react';
import {FormGroup, InputGroup, FormControl, Col, ControlLabel, Button} from 'react-bootstrap';

import Message from '../models/Message'

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        Message.store(this.state.message)
               .then((resp) => {
                   if(resp.status == 'ok'){
                       alert('Mensaje enviado')
                   }
               });
    }

    handleChange(e){
        this.setState({ message: e.target.value });
    }

    render(){
        return(
            <Col md={9} mdPush={2} style={{'bottom': 10, 'marginTop': 30}}>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Agregar comentario</ControlLabel>
                    <FormControl componentClass="textarea"
                                 placeholder="textarea"
                                 onChange={this.handleChange}
                                 value={this.state.message} />

                    <Button bsStyle="primary" className="pull-right"
                            onClick={this.handleClick}>Send</Button>
                </FormGroup>

            </Col>
        );
    }

}


export default Form;
