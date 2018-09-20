const initialState = {
    loading: true,
    error: false,
    articleList: []
}

const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
const LOAD_ARTICLE_ERROR = 'LOAD_ARTICLE_ERROR';

export function loadArticles() {
    return {
        types: [LOAD_ARTICLES, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_ERROR],
        url: '/api/articles.json',
    }
}

export default function preViewList(state = initialState, action) {
    switch (action.type){
        case LOAD_ARTICLES: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case LOAD_ARTICLE_SUCCESS:{
            return {
                ...state,
                loading: false,
                error:false,
                articleList:action.payload
            }
        }
        case LOAD_ARTICLE_ERROR:{
            return {
                ...state,
                loading: false,
                error:true,
            }
        }
        default:
            return state;
    }
}
