import React, { Component } from 'react';
import './Post.css';
import Header from './../header/Header';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import avatar from '../images/avatar.png';
import Comment from './Comment';
import Menu from './../Menu/Menu';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            post:this.props.post
        
    }
    }
    render() {
        return (
            <div style={{ backgroundColor: '#f2f2f2' }}>
                <Header />

                <Menu />
                
                <div className='post-container'>

                    <div className='saved-post-bar'>
                        <div className='bar-title'>
                            Saved post
        </div>
                        <div className='bar-content'>
                            No saved post.
        </div>
                    </div>

                    <div className='hashtag-bar'>
                        <div className='bar-title'>
                            #Hashtag
          </div>

                        <div className='bar-content'>
                        {
                            // this.state.hashtags.map((hashtag)=>{
                            //   return(<a>{hashtag}</a> )
                              
                            // })
                        }
                            <a>#android</a>
                            <a>#web</a>
                            <a>#machineLearning</a>
                            <a>#iOS</a>
                            <a>#AI</a>
                            <a>#tricks</a>
                            <a>#share</a>
                        </div>
                    </div>

                    <div className='main-content'>
                        <div className='user-avatar'>
                            <img src={avatar} />
                        </div>

                        <div className='short-description'>
                            <div className='post-title'>
                            This is title
                                {
                                    // this.state.post.title
                                }
                            </div>
                            <p className='username'><a href='/profile'>Nguyễn Quang Linh</a></p>


                            <div className='user-interact'>
                                <div className='main-hashtag'>
                                    {
                                        // this.state.post.hashtags.map(hashtag=>{
                                        //     return(
                                        //         <span className='hashtag'><a>{hashtag}</a></span>
                                        //     )
                                        // })
                                    }
                                </div>
                                <i class="fa fa-comment-o" style={{ fontSize: '15px', marginLeft: '10px' }}>14</i>
                                <i class="fa fa-thumbs-o-up" style={{ fontSize: '15px' }}> 64</i>
                                
                            </div>
                        </div>

                        <div className='post-content'>
                            {this.state.post}
                        </div>
                        <button className='btn btn-sm btn-primary' style={{width:'60px',float:'right',marginRight:'10px'}}><i class="fa fa-thumbs-o-up" style={{ fontSize: '15px' }}></i> Like</button>
                    </div>

                    <div className='interaction'>
                        <div className='add-comment'>
                            <h4>Comment</h4>
                            <textarea placeholder='Add comment here...' onChange={event=>{this.setState(this.state.newComment=event.target.value)}}></textarea>
                            <button className='btn btn-primary' 
                                style={{ float: 'right', width: '70px' }}
                                   
                            >
                            Post
                            </button>
                        </div>
                        <div className='view-comment'>
                        {
                            // this.state.comments.map((comment)=>{
                            //     return(
                            //         <Comment username={comment.username} content={comment.content} />
                            //     )
                            // })
                        }
                            
                        </div>
                    </div>
                    <div className='weekly-bar'>
                        <div className='bar-title'>
                            Weekly
          </div>
                        <div className='bar-content'>
                        {
                            // this.state.activities.map((date,activity)=>{
                            //   return(
                            //     <li>{date} - {activity}</li>
                            //   )
                            // })
                        }
                            No activities yet.
          </div>
          <a href='/event'>Detail>></a>
                    </div>

                    <div className='ranking-bar'>
                        <div className='bar-title'>
                            Ranking
          </div>
                        <div className='bar-content'>
                            <table className='ranking-table' >

                                <tr>
                                    <th>#</th>
                                    <th>User</th>
                                    <th>Votes</th>
                                </tr>
                                {
                                    // this.state.ranking.map((rank,username,votes)=>{
                                    //   return(
                                    //     <tr>
                                    //     <td>{rank}</td>
                                    //     <td>{username}</td>
                                    //     <td>{votes}</td>
                                    //     </tr>
                                    //   )
                                    // })
                                  }
                                <tr>
                                    <td>1</td>
                                    <td>Wasd</td>
                                    <td>696</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Vũ Phan</td>
                                    <td>569</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>The Uranus</td>
                                    <td>496</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Hoàng Hải</td>
                                    <td>369</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
