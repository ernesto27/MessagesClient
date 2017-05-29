import React, {Component} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import User from '../models/User';

class SidebarLeft extends Component{
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }

    componentWillMount(){
        User.getAll()
            .then((data) => {
                console.log(data)
                this.setState({ users: data });

            });
    }

    render(){
        return(
                <Col md={2} mdPull={6}>
                    <ListGroup>
                        {this.state.users.map((user, key) =>
                            <ListGroupItem key={key}>{user.name}</ListGroupItem>
                        )}
                    </ListGroup>
                </Col>

        );
    }

}


export default SidebarLeft;
