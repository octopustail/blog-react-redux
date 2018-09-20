import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import {actions} from './HomeRedux'
import {push} from 'react-router-redux'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home1</h1>
                <PreviewList
                    {...this.props.list}
                    {...this.props.listActions}
                    push={this.props.push}
                />
            </div>
        )
    }
}

// connect(mapStateToProps,mapDispatchToProps)
export default connect(state => {
    return {
        list: state.home.list, //取出整个Redux状态树中 home.list分支作为当前组件的Props
    }
}, dispatch => {
    return {
        listActions: bindActionCreators(actions, dispatch),
        push:bindActionCreators(push,dispatch)
    }
})(Home);