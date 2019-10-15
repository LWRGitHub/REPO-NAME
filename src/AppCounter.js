import React, { useState } from 'react';


//Like Counter
function AppCounter() {
      return (
        <div className="App">
          <Counter />
        </div>
      );
    }
  
function Counter() {
    let state = {
        count: 0
    };

    const [count, setCount] = useState(0);
    
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>
          Like {count}
        </button>
      </div>
    )
}

export default AppCounter