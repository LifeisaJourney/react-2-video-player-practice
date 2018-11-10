import React from 'react';

export class Menu extends React.Component {

handleClick: function(e){
  const text=e.target.value;
  this.props.chooseVideo(text);
}
//step 7: handleClick event that passes chooseVideo function with text variable
  render() {
    return (
      //step 6: chooseVideo passing down as props on Menu component
      <form onClick={this.props.chooseVideo}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}