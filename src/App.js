import './App.css';
 let r = 'React'
  let rn = 'React Native'
  const el =(
    <div>
      Create Web & Moblie Apps<br/>
      with {r}&{rn}
    </div>
  )

function App() {
  const divStyle ={
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '3px'

  }
  return ( <div style={divStyle}>Hello React</div>
    );
}

export default App;
