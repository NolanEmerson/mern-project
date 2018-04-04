import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:9000/api/get-stuff').then( res=>{
            this.setState({
                text: res.data.message
            });
        })
    }
    render(){

        return (
            <div>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

export default GetStuff;