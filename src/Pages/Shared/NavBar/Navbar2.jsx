import { Component } from 'react';
import log from '../../../assets/Logo/ICCL.jpg';
import './Navbar2.css';
class Navbar2 extends Component{
    state={clicked:false};
    handleClick = ()=>{
        this.setState({clicked:
            !this.state.clicked})
    }
    render(){
    return (
        
            <nav>
                <a href="index.html"><img src={log} /></a>
                <div>
                    <ul id='navber' className={this.state.clicked ? "#navber active" : "#navber"}>
                        <li>
                            <a className='active' href="index.html">Home</a>
                            <a href="index.html">About</a>
                            <a href="index.html">Service</a>
                            <a href="index.html">Product</a>
                            <a href="index.html">Testimonial</a>
                            <a href="index.html">Contact</a>
                        </li>
                    </ul>
                </div>
                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
                    
                </div>
            </nav>
        
    );
}}

export default Navbar2;