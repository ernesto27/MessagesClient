import React, {Component} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, Media} from 'react-bootstrap';

class Body extends Component{

    render(){
        return(
            <Col md={6} mdPush={2}>
            <div>
                <Media>
                 <Media.Left>
                    <img width={64} height={64} src="http://innocentwords.com/wp-content/uploads/2015/03/JerryCantrell.jpg" alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Media Heading</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                  </Media.Body>
                </Media>

                <Media>
                  <Media.Left>
                    <img width={64} height={64} src="http://innocentwords.com/wp-content/uploads/2015/03/JerryCantrell.jpg" alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Media Heading</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                  </Media.Body>
                </Media>

                </div>
            </Col>
        );
    }

}


export default Body;
