import React, {Component} from 'react';
import Nav from './Nav';

class Frame extends Component {
    render() {
        return (
            <div className="frame">
                <section className="header">
                    <Nav/>
                </section>
                <section className="container">
                    {this.props.children} {/* 渲染的其实就是Home*/}
                </section>
            </div>
        )
    }
}

export default Frame;