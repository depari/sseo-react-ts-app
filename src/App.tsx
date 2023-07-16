import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>      
      <input type="button" value="toggle funcComp"  onClick={function(){        
        setFuncShow(!funcShow);
      }}/>
      <input type="button" value="toggle classComp"  onClick={function(){        
        setClassShow(!classShow);
      }}/>
      {funcShow? <FuncTypeCompoent initNumber={2}></FuncTypeCompoent> : null}
      {classShow? <ClassTypeComponent initNumber={2}></ClassTypeComponent> : null}
    </div>
  );
}

var funcStyle = 'color:blue';
function FuncTypeCompoent(props:any)
{
  
  const [number, setNumber ] = useState(7);
  const [date, newDate ] = useState((new Date()).toString());
  useEffect(function(){
    console.log("%cFunctionStyle >> useEffect - number", funcStyle);      
    document.title = number.toString();
    return function() {
      console.log("%cFunctionStyle >> useEffect_Return number", funcStyle);      
    }
  }, [number]);

  useEffect(function(){
    console.log("%cFunctionStyle >> useEffect date", funcStyle);      
    document.title = date;
    return function() {
      console.log("%cFunctionStyle >> useEffect_Return date", funcStyle);      
    }
  }, [date]);

  console.log("%cFunctionStyle >> Render", funcStyle);      

  return (
    <div className='cotainer'>
      <h2>function type component</h2>  
      <p>Number : {props.initNumber}</p>    
      <p>Number : {number}</p>    
      <p>Date : {date}</p>    

      <input type="button" value="random" onClick={          
          function(){ 
            // setNumber({number:Math.random()})            
            setNumber(Math.random());            
          }
        }></input>    
      <input type="button" value="date" onClick={          
          function(){             
            newDate((new Date()).toString());
          }
        }></input>    
    </div>
  );
}

var classStyle = 'color:red';
class ClassTypeComponent extends React.Component<{initNumber:any}, {}> {
  // constructor(props) {
  //   this.props.initNumber
  // }
  state = {
    number : this.props.initNumber,
    date : (new Date()).toString()
  }
  componentWillUnmount(): void {
      console.log("%cClass >> componentWillUnmount", classStyle);      
  }
  componentDidMount(): void {
    console.log("%cClass >> componentDidMount", classStyle);      
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("%cClass >> componentDidCatch", classStyle);      
  }  
  shouldComponentUpdate(nextProps: Readonly<{ initNumber: any; }>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log("%cClass >> shouldComponentUpdate", classStyle);      
    return true;
  }
  componentDidUpdate(prevProps: Readonly<{ initNumber: any; }>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log("%cClass >> componentDidUpdate", classStyle);      
  }  
  render(): React.ReactNode {
    console.log("%cClass >> render", classStyle);      
    const self = this;
    return (
      <div className='cotainer'>
        <h2>Class type component</h2>      
        <h3>Number : {this.state.number}</h3>        
        <h3>Number : {this.props.initNumber}</h3>    
        <p>Date :{this.state.date}</p>
        <input type="button" value="random" onClick={          
          function(){            
            self.setState({number:Math.random()});            
          }.bind(this)
        }/>
        <input type="button" value="date" onClick={          
          function(){                        
            self.setState({date: (new Date()).toString()});
            
          }.bind(this)
        }/>
      </div>
    );
  }
}

export default App;
