import React, { Component } from 'react';
// import logo from './logo.svg';
import MyComponent from './MyComponent'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    // this.state = {
    //    title: 'This is Alex\'s ',
    //    og: false
    // }

    this.state={
      name: "Init name",
      title: "Init title"
    }

    // this.onSubmit = this.onSubmit.bind(this);
    // this.onClick = this.onClick.bind(this);
    this.updateName = this.updateName.bind(this);
  }
  //constructor + super allows for a two way binding to our input.

  // onClick(){
  //   this.setState = ({
  //     title: 'Not Yours anymore!'
  //   });
  //   console.log("onclick fired", this.state.title)
  //   console.log(this.state.title)
  // }

  // onClick(){
  //   //this set state mutates the title, so it is a permanent change.
  //   this.setState({title:"You re in deep!", name:"Second name!"}, ()=>{
  //     console.log("fired")
  //   })
  // }

  updateName(event){

    //this set state mutates the title, so it is a permanent change.
    this.setState({title:"You re in deep!", name:event.target.value}, ()=>{
      console.log("fired")
    })
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
  
    // const list = ['this 1 ', 'that 1 ', 'neither of those ']
    // const list2 = ["experiment", "nicely done", "we're bonito"]
    return (
      <div className="App">
        {/* <h1>{this.state.title}</h1>
          <div onClick={this.onClick}>Click Here!</div> */}
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
        <MyComponent
          title={this.state.title}
          name = {this.state.name}
          // name="tran"
          //with default props it will cover for name
          onClick = {this.onClick}
        />
        {/* <input defaultValue="booty"/>  */}
        {/* for uncontrolled values */}

        <input 
          onChange={this.updateName}
          value={this.state.name} 
        />

      </div>
    );
  }
}

export default App;
