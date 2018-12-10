import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Buttons from '../impression-buttons'
import Modal from '../modal';
class Card extends Component {

    static PropTypes = {
        img: PropTypes.string,
        views: PropTypes.number,
        likes : PropTypes.number,
        comments : PropTypes.number,
        title : PropTypes.string,
    };

    static defaultProps = {
        img : "",
        views :0,
        likes:0,
        comments :0,
        title : 'default'
    };  

    state = {
        visible: false
    }

    handleClick = () => {
        this.setState((state) => ({
          visible: !state.visible,
        }));
    }



    render(){
        const {img , views , likes ,comments, title} = this.props;
        return (
            <div>
            <div className="card">
            <img class="card_image" src={img} onClick={this.handleClick} height="80%" width="100%"alt="default" />

                <div className="card_buttons">
                <Buttons  views={views} likes={likes} comments={comments}> </Buttons>
                </div>

            </div>
            <Modal visible={this.state.visible}   img = {img}onClose={this.handleClick} > </Modal>
        </div> 
            // <section>
            //     <div className="row">
            //         <div className="col">
            //             <div className="card">
            //             <img src={img} onClick={this.handleClick} height="80%" width="100%"alt="default" />

            //                 <div className="card_buttons">
            //                 <Buttons  views={views} likes={likes} comments={comments}> </Buttons>
            //                 </div>

            //             </div>
            //             <Modal visible={this.state.visible}   onClose={this.handleClick} > </Modal>
            //         </div>
            //         <div className="col">
            //             <div className="card">
            //             <img src={img}  height="80%" width="100%"alt="default"/>
            //                 <div className="card_buttons">
            //                 <Buttons  views={views} likes={likes} comments={comments}> </Buttons>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col">
            //             <div className="card">
            //             <img src={img}  height="80%" width="100%"alt="default"/>
            //                 <div className="card_buttons">
            //                 <Buttons  views={views} likes={likes} comments={comments}> </Buttons>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col">
            //             <div className="card">
            //             <img src={img}  height="80%" width="100%"alt="default"/>
            //                 <div className="card_buttons">
            //                 <Buttons  views={views} likes={likes} comments={comments}> </Buttons>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>
        )


    }




}

export default Card;