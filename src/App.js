import { Component } from 'react';
import './App.css';

let keypadArr = [
  {display:"+", value:"plus", type:"operation"},
  {display:"-", value:"minus", type:"operation"},
  {display:"x", value:"multiply", type:"operation"},
  {display:"/", value:"divide", type:"operation"},
  {display:"7", value:7, type:"number"},
  {display:"8", value:8, type:"number"},
  {display:"9", value:9, type:"number"},
  {display:"", value:"space", type:"space"},
  {display:"4", value:4, type:"number"},
  {display:"5", value:5, type:"number"},
  {display:"6", value:6, type:"number"},
  {display:"", value:"space", type:"space"},
  {display:"1", value:1, type:"number"},
  {display:"2", value:2, type:"number"},
  {display:"3", value:3, type:"number"},
  {display:"", value:"space", type:"space"},
  {display:"C", value:"clear", type:"clear"},
  {display:"0", value:0, type:"number"},
  {display:"=", value:"equals", type:"operation"}, 
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      displayValue: "0",
      calculation: "",
      operation: "",
      results: ""
    }
  }

  handleButtonClick = (btn) =>{
    if(btn.type === "number"){
      let newDisplayValue;
      
      if(this.state.displayValue === "0"){
        newDisplayValue = btn.display;
      } else {
        newDisplayValue =  this.state.displayValue + btn.display;
      }

      this.setState({
        displayValue: newDisplayValue
      })
    }

    if(btn.type === "operation"){
      this.setState({
        previousValue: this.state.displayValue,
        operation: btn.type
      })
      if(btn.type === "+"){
        
      }

    }
      
     
    
  }
  handleDivision = () => {

  };

  handleMultiply = () => {

  };

  handleAdd = () => {

  };

  handleSubtract = () => {

  };
  render() {
    
    let buttonArr = keypadArr.map((button, index) => {
      return (
        <div  
          key={index} 
          className="calc-button" 
          onClick={()=>this.handleButtonClick(button)}
        >
          { button.display }
        </div>
        )
    })
  
    return (
      <div id="calc-container">
        <div id="display">
          {this.state.displayValue}
        </div>
        <div id="keypad-container"> 
          { buttonArr }
        </div>
      </div>
    )
    
    
    
    
  }
}

  

export default App;
