import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class Post extends Component{
    render(){
        console.log(this.props)
        //const title = this.props.post.title
        const {post} = this.props
        const {id, timestamp, title, body, author, category} = post
//        console.log(title)
        return(
            <div className = 'post'>
                <div>{id}</div>
                <div>{formatDate(timestamp)}</div>
                <div>{title}</div>
                <div>{body}</div>
            </div>
        )
    }
}

//RECEBE O ID DO COMPONENTE PAI (DASHBOARD) E MONTA POST A POST
//{posts} SE REFERE A FATIA DE POSTS DA STATE, MONTADO PELAS ACTIONS E REDUCERS
function mapStateToProps({posts}, {id}){
    const post= posts[id]

    return{
        post: post,
        
    }
}

export default connect(mapStateToProps)(Post)