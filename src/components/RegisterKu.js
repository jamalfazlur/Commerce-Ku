import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { onUserRegister } from '../actions'

const cookies = new Cookies();

class RegisterKu extends Component{

    componentWillReceiveProps(newProps){
        if(newProps.username !== ''){
            cookies.set('myPengguna', newProps.username, {path: '/'})
        }
    }

    renderError = () => {
        if(this.props.error.length > 0){
            return <Alert bsStyle="warning"><span className="glyphicon glyphicon-exclamation-sign"></span> {this.props.error}</Alert>
        }
    }

    renderButton = () => {
        if(this.props.loading){
            return <Alert bsStyle="warning">Loading...</Alert>
        }
        return <button type="button" onClick={this.onBtnRegisterClick} className="col-sm-8 col-sm-offset-2 btn btn-info">Daftar <span className="glyphicon glyphicon-log-in"></span></button>
    }

    onBtnRegisterClick = () => {
        
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        console.log(username,email, password);
        this.props.onUserRegister({username, email, password});
    }
    render(){
        if(this.props.username === ""){
            return(
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="panel" style={{border:"1px solid #e7e7e7", background:"#f8f8f8"}}>
                        <div className="panel-heading" style={{background:"#e7e7e7"}}>
                            <h2 className="panel-title"><span className="glyphicon glyphicon-plus-sign"></span> Daftar Gratis !</h2>
                        </div>
                        <div class="panel-body">
                            <form class="form-horizontal">  

                                <div className="form-group">
                                    <label for="tbUsername" class="col-sm-4 control-label">Nama Pengguna</label>
                                    <div className="col-sm-8">
                                        <input type="text" id="tbUsername" ref="username" placeholder="Nama Pengguna" className="form-control" autoFocus/>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label for="tbUsername" class="col-sm-4 control-label">Email</label>
                                    <div className="col-sm-8">
                                        <input type="email" id="tbEmail" ref="email" placeholder="email@contoh.com" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="tbUsername" class="col-sm-4 control-label">Kata Sandi</label>
                                    <div className="col-sm-8">
                                        <input type="password" id="tbPassword" ref="password" placeholder="Kata Sandi" className="form-control"/>
                                    </div>
                                </div>
                                {this.renderError()}
                                <hr/>
                                {this.renderButton()}
                            </form>
                        </div>
                    </div>                        
                </div>
            );
            
        }
        return <Redirect to='/' />
    }
}

const mapStateToProps = (state) => {
    return {username: state.auth.username, 
            error: state.auth.error, 
            loading: state.auth.loading };
}

export default connect(mapStateToProps, {onUserRegister})(RegisterKu);