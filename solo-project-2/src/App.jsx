import { Header } from "../components/header"
import { Card } from "../components/card"
import data from "../components/data.js"

const cards = data.map((card)=> {
  return <Card 
    data = {card}
  />
})

console.log(cards)

export default function App(){
  return (
    <div>
      <Header />
    <section className="container">
      {cards}
    </section>
    </div>
  )
}
