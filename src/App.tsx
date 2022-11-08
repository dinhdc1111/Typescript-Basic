import { useState } from 'react'

type Show = {
  name : string,
}

function App() {
  const [myName, setMyName] = useState("Cong Dinh")
function Show(props: Show){
  return <div>{props.name}</div>
}
  return (
    <div className="App">
      <Show name={myName}/>
    </div>
  )
}

export default App
