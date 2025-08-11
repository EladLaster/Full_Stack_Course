import { showCompany } from "./Intro&JSX/showCompany.jsx";
import { getClassName } from "./Intro&JSX/getClassName.jsx";
import './App.css'
export function App() {

  let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }
    ]
    const temperature = 20;

  return (
    <div>
      <div className="ex-space">
        <h2 className='ex-title'>Exercise 1</h2>
        <div className="exercise" id="ex-1">
          {companies.map(c=>showCompany(c.name,c.revenue))}
        </div>
      </div>
      
      <div className="ex-space">
        <h2 className='ex-title'>Exercise 2</h2>
        <div className="exercise" id="ex-2">
          <div id="weatherBox" className={getClassName(temperature)}></div>
        </div>
      </div>
    </div>
  )
}

export default App
