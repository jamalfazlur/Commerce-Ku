import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { onUserLogin } from '../actions';
import { Alert } from 'react-bootstrap'

const cookies = new Cookies();

class LoginKu extends Component{

    componentWillReceiveProps(newProps){
        // console.log('Will receive props has been triggered');
        if(newProps.username !== '') {
            cookies.set('myPengguna', newProps.username, {path: '/'})
        }
    }

    renderError = () => {
        if(this.props.error.length > 0){
            return <Alert bsStyle="warning"><span className="glyphicon glyphicon-exclamation-sign"></span> {this.props.error}</Alert>
        }
    }

    onBtnLoginClick = () => {
        var username = this.refs.username.value;
        var password = this.refs.password.value;

        console.log(username,password);
        this.props.onUserLogin({username, password});
    }
    onBtnRegisterClick = () => {
        return <Redirect to="/register" />
    }

    render(){
        if(this.props.username === ""){
            return(
                <div className="row" style={{padding:"10px"}}>
                    <div className="col-sm-6 col-sm-offset-3" style={{border:"1px solid #ddd", borderRadius:"5px", paddingTop:"30px", paddingBottom:"30px", background:"#f8f8f8"}}>
                        <form class="form-horizontal">
                            <div className="form-group">
                                <label for="tbUsername" class="col-sm-4 control-label">Nama Pengguna</label>
                                <div class="col-sm-8">
                                    <input type="text" id="tbUsername" ref="username" placeholder="Nama Pengguna" className="form-control" autoFocus/>                             
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="tbPassword" class="col-sm-4 control-label">Kata Sandi</label>
                                <div class="col-sm-8">
                                    <input type="password" id="tbPassword" ref="password" placeholder="Kata Sandi" className="form-control"/>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                {this.renderError()}
                            </div>
                            <div className="btn-group col-sm-12">
                                <button type="button" onClick={this.onBtnLoginClick} className="btn btn-primary col-sm-6" style={{marginBottom:"5px"}}><span className="glyphicon glyphicon-log-in"></span> Masuk</button>
                                <a href='/register' type="button" className="btn btn-info col-sm-6"><span className="glyphicon glyphicon-new-window"></span> Buat Akun </a>
                            </div>
                            
                        </form>
                    </div>
                </div>                   
                
            );
        }
        return <Redirect to="/" />
    }
}

const mapStateToProps = (state) => {
    return { 
        username: state.auth.username,
        error: state.auth.error, 
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, {onUserLogin})(LoginKu);