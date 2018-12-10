import React, { Component } from "react";
import Card from "../card";
import PropTypes from "prop-types";
import "../../styles.css";
class CardList extends Component {
  static PropTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string,
        likes: PropTypes.string,
        comments: PropTypes.string,
        views: PropTypes.string
      })
    )
  };

  static defaultprops = {
    items: [
      {
        views: 3000,
        likes: 200,
        comments: 2,
        img: "http://www.gamba.fm/wp/wp-content/uploads/2018/09/Pizza.jpg"
      },
      {
        views: 2000,
        likes: 300,
        comments: 2,
        img: "http://cdn.akc.org/content/hero/pug-breed-header.jpg"
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
      }
    ]
  };
  state = {};
  render() {
    const { items } = this.props;
    return (
      <div className="container">
          <div className="row row--4 ">
        {items.map(item => (
      
            <div className="col">
              <Card
                img={item.img}
                likes={item.likes}
                views={item.views}
                comments={item.comments}
              />
            </div>
            
       
        ))}
           </div>
      </div>
    );
  }
}

export default CardList;
