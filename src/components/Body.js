import React, {Component} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, Media} from 'react-bootstrap';

import Message from '../models/Message';

class Body extends Component{

    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }

    componentWillMount(){
        Message.getAll()
               .then((data) => {
                   this.setState({ messages: data });
               });
    }

    render(){
        return(
            <Col md={6} mdPush={2}>
                <div>
                    {this.state.messages.map((message, key) =>
                        <Media key={key}>
                         <Media.Left>
                            <img width={64} height={64} src="http://innocentwords.com/wp-content/uploads/2015/03/JerryCantrell.jpg" alt="Image"/>
                          </Media.Left>
                          <Media.Body>
                            <Media.Heading>Nombre User</Media.Heading>
                            <p>{message.body}</p>
                          </Media.Body>
                        </Media>
                    )}
                </div>
            </Col>
        );
    }

}


export default Body;
