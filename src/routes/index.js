import React from 'react';
import {Route} from 'react-router';

import {HomePage,Profile,Post,Blog,Question,Textbook,WritePost,Event,logIn, PageLayout, Search} from './routes';

export default (
    <Route>
      <Route path="/" component={PageLayout} />
      <Route path="/home" component={HomePage} />
      <Route path='/profile/:userId' component={Profile}/>
      <Route path='/post/:postId' component={Post}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/QA' component={Question}/>
      <Route path='/textbook' component={Textbook}/>
      <Route path='/writepost' component={WritePost}/>
      <Route path='/event' component={Event}/>
      <Route path='/login' component={logIn}/>
      <Route path='/search' component={Search}/>
    </Route>
  );