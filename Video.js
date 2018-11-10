import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autostart autoplay src={this.props.src} />
      </div>
//step 2: passing in the  video from apps as something in video component.
    );
  }
}