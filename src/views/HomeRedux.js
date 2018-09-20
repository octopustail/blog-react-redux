/* views下的 *Redux.js 文件只是起到了一个整合作用  */
import { combineReducers } from 'redux';
import list,{loadArticles}from '../components/Home/PreviewListRedux'

export default combineReducers({
    list,
})

export const actions = {
    loadArticles,
};