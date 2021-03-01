import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// const name = props.name
//   const age = props.age
// const {name,age} = props



// const App = () => {
//   const [counter, setCounter] = useState(0)
//   setTimeout(
//     () => setCounter(counter + 1),1000
//   )
//   return(
//     <div> {counter}</div>
//   )
// }


const Title = () => <h1>anna palautetta</h1>

const Button = ({text, setText}) => (
    <button onClick={setText}>
      {text}
    </button>
  )

const Statistic = ({text, value}) => {
  return (
      <tr>
        <td>h{text}</td>
        <td>{value}</td>
      </tr>
  )
}
const Statistics = ({data}) => {
  const { hyvä, neutraali, huono } = data

  const kaikkiPalautteet = hyvä + neutraali + huono
  const hyvatpalautteet = 100 * (hyvä / kaikkiPalautteet) + '%'
  const keskiarvo = ((hyvä - huono) / kaikkiPalautteet)
    
  if(kaikkiPalautteet > 0) {
    return (
      <div>
        <h1>statistiikka</h1>
        <table>
          <tbody>
            <Statistic text='hyvä' value = {hyvä} />
            <Statistic text='neutraali' value = {neutraali} />
            <Statistic text='huono' value = {huono} />
            <Statistic text='keskiarvo' value = {keskiarvo} />
            <Statistic text='positiivisa' value = {hyvatpalautteet} />      
          </tbody>
        </table>

      </div>
    )
  } 

  return (
    <div><p>ei yhtään palautetta annettu</p></div>
  )
  
} 


const App = (props) => {
  
  const [hyvä, sethyvä] = useState(0)
  const [neutraali, setneutraali] = useState(0)
  const [huono, sethuono] = useState(0)
  
  const sethyväTulos = (newValue) => {
    sethyvä(newValue)
  }

  const lisaahyväTulos = () => sethyväTulos(hyvä + 1);

  const setneutraaliTulos = (newValue) => {
    setneutraali(newValue)
  }

  const lisaaneutraaliTulos = () => setneutraaliTulos(neutraali + 1);

  const sethuonoTulos = (newValue) => {
    sethuono(newValue)
  }

  const lisaahuonoTulos = () => sethuonoTulos(huono + 1);

  const tulokset = {
    hyvä: hyvä,
    neutraali: neutraali,
    huono: huono
    }
 
  return (
    <div>
        <Title/>
        <Button setText={lisaahyväTulos} text="hyvä" counter={hyvä} /> 
        <Button setText={lisaaneutraaliTulos} text="neutraali" counter={neutraali}/> 
        <Button setText={lisaahuonoTulos} text="huono" counter={huono}/> 
        <Statistics data={tulokset}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)