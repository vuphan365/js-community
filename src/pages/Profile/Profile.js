import React, { Component } from 'react';
import Header from './../header/Header';
import './Profile.css';
import ShortPost from './../Post/ShortPost';
import avatar from '../images/avatar.png';
import Menu from './../Menu/Menu';

export default class Profile extends Component{
    render(){
        return(
        <div style={{ backgroundColor: '#e6e6e6' }}>
        <Header />
          <Menu/>
        <div className='container'>

          <div className='profile'>
            <div className='avatar'><img src={avatar}/></div>
            <div className='bar-content'>
            <div className='username-profile'>Nguyễn Quang Linh</div>
            <div className='public-profile'>
              <table className='table-profile'>
                <tr>
                  <td>Date of birth:</td>
                  <td>13/04/1998</td>
                </tr>
                <tr>
                  <td>Total posts:</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Total votes:</td>
                  <td>54</td>
                </tr>
                <tr>
                  <td>Ranking:</td>
                  <td>#1</td>
                </tr>
              </table>
            </div>
            </div>
          </div>

          <div className='main-content'>
          <ShortPost username='Nguyễn Quang Linh' title='Các loại bootstrap trong RxSwift' />
          <ShortPost username='Nguyễn Quang Linh' title='Bootstrapping trong AngularJS'/>
          <ShortPost username='Nguyễn Quang Linh' title='Class method: Một số vấn đề về Coding Standard'/>
          <ShortPost username='Nguyễn Quang Linh' title='hướng dẫn debug trong react native'/>
          <ShortPost username='Nguyễn Quang Linh' title='Vài ghi chép về V8 và Garbage Collection'/>
          </div>
          </div>
        </div>
      
        )
    }
}