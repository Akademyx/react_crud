import React, { Component } from 'react';
// import logo from './logo.svg';
import PropTypes from 'prop-types';
//prop types help with front end validations


const propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    //if prop types is an object
    // shape: PropTypes.shape({})
    //shape: PropTypes.arrayOf([])
    //shape: PropTypes.any which means anything is accetable.

}

const defaultProps = {
    name: 'Default name of App'
}

class MyComponent extends Component {
    shouldComponentUpdate(nextProps, nextState){
        //makes use of boolean
        // return false; //Component stuff wont update
        return true; //Component stuff will update.
    }

    // componentWillUpdate(nextProps,nextState){
    //     console.log(this.props, this.state, nextProps,nextState)
        //this helps telling you what it is now, and after.
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(this.props, this.state, prevProps, prevState)
    //     //this helps check what is it currently, to what was
    // }

    // componentWillMount(){
    //     console.log("Will Mount")
    //     //Great for making Ajax requests
    // }

    // componentDidMount(){
    //     console.log("Did Mount")
    //     //good for focusing a field after component loads.
    // }
  
  render() {
    const {title, name, onClick } = this.props; //for lines 14-15
    return (
      <div className="component">
        <h1>This is a comopnent that is dropped into another component</h1>
        {/* <h2>Title: {this.props.title}</h2> */}
        {/* <h2>Title: {this.props.name}</h2> */}
        <h2>Title: {title}</h2>
        <h2>Name: {name}</h2>
        <div onClick={onClick}>Click me! </div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
