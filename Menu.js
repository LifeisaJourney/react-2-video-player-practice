import React from 'react';

export class Menu extends React.Component {
constructor(props){
  super(props);
  this.handleClick=this.handleClick.bind(this);
}
//step 8: binding handleClick to this instance

handleClick: function(e){
  const text=e.target.value;
  this.props.chooseVideo(text);
}
//step 7: handleClick event that passes chooseVideo function with text variable
  render() {
    return (
      //step 6: chooseVideo passing down as props on Menu component
      // <form onClick={this.props.chooseVideo}>
      //step 9: changing wrapper to handleClick
      <form onClick={this.handleClick} >
      
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}