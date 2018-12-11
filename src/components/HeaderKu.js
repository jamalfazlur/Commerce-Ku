import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { onUserLogout, keepLogin } from '../actions';

const cookies = new Cookies();

class HeaderKu extends Component{

    onLogoutClick = () => {
        this.props.onUserLogout();
        cookies.remove('myPengguna');
    }

    render(){
        var sayHello = `Halo, ${this.props.username.toUpperCase()}`;

        if (this.props.username === ""){
            return(
                <Navbar collapseOnSelect fluid>
                    <Navbar.Header>
                        <Navbar.Brand >
                        <a href="/" style={{color: "#337ab7"}}><span className="glyphicon glyphicon-fire" style={{color: "red"}}></span> Jamal Adventure</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        
                        <Nav pullRight>
                            <NavItem eventKey={1}>
                                <Link to="/register">Daftar</Link>
                            </NavItem>
                            <NavItem eventKey={2}>
                                <Link to="/login">Masuk</Link>
                            </NavItem>                      
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
        return(
            <Navbar collapseOnSelect fluid>
                <Navbar.Header>
                    <Navbar.Brand >
                    <a href="/" style={{color: "#337ab7"}}><span className="glyphicon glyphicon-fire" style={{color: "red"}}></span> Jamal Fazlur</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav> 
                        <NavDropdown eventKey={3} id="basic-nav-dropdown" title="Kategori">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>

                        <NavItem eventKey={4} href="#" className="active">
                            <Link to="/movie"><span className="glyphicon glyphicon-film"></span> Daftar Produk</Link>
                        </NavItem>

                    </Nav>

                    <Nav pullRight>
                        <NavDropdown eventKey={3} id="basic-nav-dropdown" title={sayHello}>
                            <MenuItem eventKey={3.1}><span className="glyphicon glyphicon-shopping-cart"></span> Keranjang</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2} onClick={this.onLogoutClick} ><span className="glyphicon glyphicon-log-out"></span> Keluar</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    }
}


export default connect(mapStateToProps, {keepLogin, onUserLogout})(HeaderKu);