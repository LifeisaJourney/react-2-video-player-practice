import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.chooseVideo=this.chooseVideo.bind(this);
    //step 5: binding it to this App component with this instance
  }
//step 3: chooseVideo function as setState 
  chooseVideo: function (newVideo){
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    //step 4: passing chooseVideo into Menu component
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
      //step 1: passing src as state down to video component
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);