import React, { Component } from 'react'


export class DangNhap extends Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" onChange={this.handleChange} />
                        
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default DangNhap
