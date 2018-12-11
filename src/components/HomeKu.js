import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class HomeKu extends Component {
    render(){
        return(
            <div>
                <div className="row"> 
                    <Carousel>
                        <Carousel.Item>
                            <img width={1336} height={500} alt="900x500" src="./img/land.jpg" />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1336} height={500} alt="900x500" src="./img/land2.jpg" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1336} height={500} alt="900x500" src="./img/land3.jpg" />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div> 
                <div className="row">
                    <div className="col-md-4" style={{paddingLeft:"0",marginTop:"20px"}}>
                        <div className="list-group" style={{marginLeft:"0"}}>
                            <a href="#" className="list-group-item disabled">GROUP GEAR</a>
                            <a href="#" className="list-group-item">Lorem Ipsum <span className="badge">14</span></a>
                            <a href="#" className="list-group-item">Dolor Sit Amet</a>
                            <a href="#" className="list-group-item">Ipsum Dolor e Si <span className="badge">3</span></a>
                            <a href="#" className="list-group-item">Amet Lor Sume</a>
                        </div>
                    </div>
                </div> 
            </div>
            
        );
    }
}

export default HomeKu;