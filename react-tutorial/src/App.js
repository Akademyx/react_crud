import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
       title: 'This is Alex\'s ',
       og: true
    }

    // this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  //constructor + super allows for a two way binding to our input.


  // onClick(){
  //   this.setState = ({
  //     title: 'Not Yours anymore!'
  //   });
  //   console.log("onclick fired", this.state.title)
  //   console.log(this.state.title)
  // }

  onClick(){
    //this set state mutates the title, so it is a permanent change.
    this.setState({title:"You re in deep!"}, ()=>{
      console.log("hm...")
    })
    console.log("fired")
  }


  // onChange(event){
  //   console.log(event.target.value)
  // }
  // onSubmit(event){
  //   event.preventDefault();
  //   console.log(this.input.value)
  // }


  render() {
    //keep logic out of the html
  
    const list = ['this 1 ', 'that 1 ', 'neither of those ']
    const list2 = ["experiment", "nicely done", "we're bonito"]
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
          <div onClick={this.onClick}>Click Here!</div>
        {/* <h1> */}
          {/* {
            false ? secondTitle: title
          }  */} 
          {/* {
            list.map(item => {return item + "_";})
          }  
        </h1> */}
        {/* <ul>
            {
              list2.map(i => {
                return (
                  <li key={i}>{i}</li>
                )
              })
            }
        </ul> */}
        {/* <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} ref={input => this.input = input}/>
        </form> */}
      </div>
    );
  }
}

export default App;
