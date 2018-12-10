import React, {Component} from 'react';
import PropTypes from 'prop-types';
import view from './Union.png' // relative path to image 
import heart from './Heart.png' // relative path to image 
import ex from './Exclude.png' // relative path to image 


class Buttons extends Component {

    static PropTypes = {
        views: PropTypes.number,
        likes : PropTypes.number,
        comments : PropTypes.number,
    };

    static defaultProps = {
        views :0,
        likes:0,
        comments :0,
    };

    // handleClick = ()=>{

    //     const {likes} = this.props;
        
    // }

    render(){

        const {views , likes , comments} = this.props;
        return (
                <>
                   
                    <span> <img src={view} alt="view"/>{views} </span>
                   
                   

                    <span> <img src={heart} alt="likes"/>{likes}</span>
                   
                   
                    <span> <img src={ex} alt="comments"/>{comments}</span>
                   
                 </>
        )
    }
}

export default Buttons;