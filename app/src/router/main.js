import React, { Component, Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom'
import Web from './web'
import Admin from './admin'
import AdminLogin from '@/view/admin/login';
import { connect } from 'react-redux'
class Main extends Component {
    checkAuth() {
        let { history, auth } = this.props
        let { pathname } = this.props.location
        if (
            !auth
            && pathname !== '/admin/login'
            && pathname.indexOf('/admin') !== -1
        ) {
            history.push('/admin/login')
        }
    }
    UNSAFE_componentWillMount() {
        this.checkAuth()
    }
    UNSAFE_componentWillReceiveProps() {
        this.checkAuth()
    }
    render() {
        let { pathname } = this.props.location
        let isAdminPath = false
        let isAdminLoginPath = false
        if (pathname.indexOf('/admin') !== -1) {
            isAdminPath = true
            if (pathname === '/admin/login') {
                isAdminLoginPath = true
            }
        }
        return (
            <Fragment>
                {isAdminPath ?
                    isAdminLoginPath ?
                        <Route path='/admin/login' component={AdminLogin} />
                        : <Admin />
                    : <Web />}
            </Fragment>
        )
    }
}
let mapStateToProps = state => {
    let { auth } = state.user
    return {
        auth
    }
}

export default withRouter(connect(mapStateToProps)(Main));
