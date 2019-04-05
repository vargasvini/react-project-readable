import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Dashboard extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <h3 className='center'>POSTS TIME LINE</h3>
                <ul className='dashboard-list'>
                    {this.props.postsIds.map((id)=> (
                        <li key={id}>
                            {/* <div> TWEET ID: {id}</div> */}
                            <Post id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({posts}){
    return{
        postsIds: Object.keys(posts)
        //.sort((a,b) => posts[b].timestamp - posts[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)

// When you sort an array with .sort(), it assumes that you are sorting strings. When sorting numbers, the default behavior will not sort them properly.

// The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:

// if it returns a negative value, the value in a will be ordered before b.
// if it returns 0, the ordering of a and b won’t change.
// if it returns a positive value, the value in b will be ordered before a.
// When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.