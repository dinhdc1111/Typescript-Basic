import { useState } from 'react'
import ShowInfo from './components/ShowInfo'
import { InfoType } from './types/product';

function App() {
  const [info, setInfo] = useState<InfoType>({
    name : "Công Định",
    age : 20
  });
  return (
    <div className="App">
      <ShowInfo info={info}/>
    </div>
  )
}

export default App
