import React, {PropTypes, Component} from 'react';
import Preview from './Preview';

class PreviewList extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        articleList: PropTypes.arrayOf(PropTypes.object),
        error: PropTypes.bool,
        loadArticles: PropTypes.func,
    };

    componentDidMount() {
        this.props.loadArticles();
    }


    render() {
        const {loading, error, articleList} = this.props;

        if (error) {
            return <p className="message">Oops, something is wrong</p>
        }
        if (loading) {
            return <p className="message">Loading</p>
        }



        return (
            <div>
                {articleList.map(item => (
                <Preview {...item} key={item.id} push={this.props.push}/>
            ))}
            </div>)
    }
}


export default PreviewList
