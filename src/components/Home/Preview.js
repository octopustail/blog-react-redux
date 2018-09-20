import React, {Component} from 'react';
import './Preview.css'

class Preview extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.string,
        push: React.PropTypes.func,
    };

    handleNavigate(id, e) {
        //阻止原生链接跳转
        e.preventDefault();
        //使用react-router-redux的方法进行跳转，方便更新store
        // 遇到一个错误，原来是跳转地址没有写对
        this.props.push(`/detail/${id}`)
    }


    render() {
        return (
            <acticle className="article-preview-item">
                <h1 className="title">
                    <a href={`/detail/${this.props.id}`} onClick={this.handleNavigate.bind(this, this.props.id)}>
                        {this.props.title}
                    </a>
                </h1>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </acticle>
        )


    }
}

export default Preview