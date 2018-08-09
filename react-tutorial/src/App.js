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
      title: "Init title",
      value: 0,
      checked: true
    }

    // this.onSubmit = this.onSubmit.bind(this);
    // this.onClick = this.onClick.bind(this);
    // this.updateName = this.updateName.bind(this);
    this.updateValue = this.updateValue.bind(this);
    // this.updateCheck = this.updateCheck.bind(this);
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

  // updateName(event){
  //   //this set state mutates the title, so it is a permanent change.
  //   this.setState({title:"You re in deep!", name:event.target.value}, ()=>{
  //     console.log("fired")
  //   })
  // }

  // updateCheck(){
  //   this.setState({checked: !this.state.checked})
  // }

  updateValue(){
    this.setState(()=>{
      console.log("fired")
      return {value: this.state.value + 1}
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
          value = {this.state.value}
          // onClick = {this.onClick}
          
        />
        {/* <input defaultValue="booty"/>  */}
        {/* for uncontrolled values */}
        <button
          onClick={this.updateValue}
          value={this.state.value}
        >+1 to value</button>
        <input 
          type="checkbox"
          // onChange={this.updateCheck}
          // value={this.state.name} 
          // checked={this.state.checked}
        />


      </div>
    );
  }
}

export default App;
