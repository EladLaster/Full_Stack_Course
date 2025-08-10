import { Company } from "./Props/company.jsx";
import { Wardrobe } from "./Props/Wardrobe.jsx";
import { Wardrobe2 } from "./Props/Wardrobe2.jsx";
import './App2.css'

export function App2() {

  function generateCompanyTags(companies){
    let comps=[]
    for(let i=0;i<companies.length;i++)
      comps.push( <Company
        key={i}
        name={companies[i].name}
        revenue={companies[i].revenue}
      />)
    return comps;
  } 

  const upperCase = name => name.toUpperCase()

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }]


    let wardrobe = [
  { type: "shirt", color: "red", size: "Medium" },
  { type: "shirt", color: "blue", size: "Medium" },
  { type: "pants", color: "blue", size: "Medium" },
  { type: "accessory", color: "sapphire", size: "" },
  { type: "accessory", color: "lilac", size: "" }
]


  return (
    <div>
      <Company name={companies[0].name} revenue={companies[0].revenue} />
      {generateCompanyTags(companies)}
      {companies.map(c => <Company key={c.name} name={c.name} revenue={c.revenue} />)}
      {companies.map(c =>
        <Company
          key={upperCase(c.name)}
          name={upperCase(c.name)}
          revenue={c.revenue}
          upperCase={upperCase}
        />
      )}
      <Wardrobe wardrobe={wardrobe} />
      <Wardrobe2 wardrobe={wardrobe} />
    </div>
  )
}

export default App2
