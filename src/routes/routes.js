import React from "react";
import Loadable from 'react-loadable';

export const Loading = () => <div></div>

export const HomePage = Loadable({
  loader: () => import("../pages/HomePage"),
  loading : Loading
});

export const Profile = Loadable({
  loader: () => import("../pages/Profile/Profile"),
  loading : Loading
});

export const Post = Loadable({
  loader: () => import("../pages/Post/Post"),
  loading : Loading
});

export const Blog = Loadable({
  loader: () => import("../pages/Blog/Blog"),
  loading : Loading
});

export const Question = Loadable({
  loader: () => import("../pages/Question/Question"),
  loading : Loading
});

export const Textbook = Loadable({
  loader: () => import("../pages/Textbook/Textbook"),
  loading : Loading
});