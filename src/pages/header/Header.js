import React, { Component } from 'react';
import './Header.css';
import Card from './Card';
import logoJS from '../images/logoJS.png';

export default class Header extends Component{

    render(){
        return(
            <div className="header-container">
                <div className="title col-sm-3">
                    <a href='/home'>
                    <img src={logoJS} style={{width:'40px'}}/> JS Community
                    </a> 
                 
                 </div>
                <input className="form-control search col-sm-3" type='text' placeholder='Search...'/>
                <div className='write-a-post col-sm-2'>
                <a href='/writepost'>
                    <i class="fa fa-pencil-square-o"></i> Write a post 
                </a> 
                </div>
                <Card/>
            </div>
        )
    }
}