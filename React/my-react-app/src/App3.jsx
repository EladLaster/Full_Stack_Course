import { useState } from 'react'
import { Hudini } from './States/Hudini.jsx'
import { Home } from './States/Home.jsx'
import './App3.css'
import { Landing } from './States/Landing.jsx'
export function App3() {

    const [users,setState] = useState (  {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  }
)

    function switchPage(page) {
        setState(prev => ({ ...prev, currentPage: page }));
    }

  return (
    <div>
        <h2>Exercise 1</h2>

        <Hudini/>
        <h2>Exercise 2 + 3 + 4</h2>

        <button onClick={() => switchPage("Landing")}>Landing</button>
        <button onClick={() => switchPage("Home")}>Home</button>

        {users.currentPage === "Landing" && (
            <Landing userName={users.user} items={users.store} />
        )}
        {users.currentPage === "Home" && (
            <Home userDisc={users.shouldDiscount} items={users.store}/>
        )}
    </div>
  )
}

export default App3
