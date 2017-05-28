import React, { Component } from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import Body from './components/Body';
import Form from './components/Form';

class App extends Component {
    componentWillMount(){
        console.log('componentWillMount');
        fetch('http://messages.app/api/messages?api_token=api-token');

    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <Body />
                    <SidebarLeft />
                    <Form />
                </div>



            </div>
        );
    }
}

export default App;
