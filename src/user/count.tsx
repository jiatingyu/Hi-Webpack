import React, { useState } from 'react'

export default () => {
  let [num, setNum] = useState(0)
  return (
    <div>
      <h3>{num}</h3>
      <div>
        <button onClick={() => setNum(num + 1)} style={{ marginRight: '1rem' }}>
          num+1
        </button>
        <button onClick={() => setNum(num - 1)}>num-1</button>
      </div>
    </div>
  )
}
