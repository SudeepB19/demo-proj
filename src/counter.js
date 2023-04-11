function App() {
    const [count,chSta]= useState(0);
  
    
      return(
        <div>
          <p>you have clicked {count} times</p>
          <button onClick={()=>chSta(count+1)}>+1</button>
          <button onClick={()=>chSta(count-1)}>-1</button>
        </div>
    
      )
  }
  
  
  export default App