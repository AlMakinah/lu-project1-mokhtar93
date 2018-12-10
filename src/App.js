import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css"
import Card from '../src/components/card'
import CardList from '../src/components/cardList'
import { Page } from "../src/components/form"
import "./styles.css"
import Navbar from '../src/components/navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <CardList items={[
           {
            views: 3000,
            likes: 200,
            comments: 2,
            img: "http://cdn.akc.org/content/hero/pug-breed-header.jpg"
          },
          {
            views: 2000,
            likes: 300,
            comments: 2,
            img: "http://www.gamba.fm/wp/wp-content/uploads/2018/09/Pizza.jpg"
          },
          {
            views: 1000,
            likes: 400,
            comments: 2,
            img: "http://www.gamba.fm/wp/wp-content/uploads/2018/09/Pizza.jpg"
          },
          {
            views: 23232,
            likes: 500,
            comments: 2,
            img: "http://www.gamba.fm/wp/wp-content/uploads/2018/09/Pizza.jpg"
          },
          {
            views: 23232,
            likes: 500,
            comments: 2,
            img: "http://www.gamba.fm/wp/wp-content/uploads/2018/09/Pizza.jpg"
          },
          {
            views: 23232,
            likes: 500,
            comments: 2,
            img: "http://www.gamba.fm/wp/wp-content/uploads/2018/09/Pizza.jpg"
          }
        ]} />
      </div>
    );
  }
}

export default App;
