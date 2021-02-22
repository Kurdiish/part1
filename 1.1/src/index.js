import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
      <div>
          <h1>{props.title}</h1>
      </div>
  )
}

const Contents = (props) => {
  return (
      <div>
        <p>{props.name1} {props.phone1} </p>
        <p>n{props.name2} {props.phone2}</p>
        <p>{props.name3} {props.phone3}</p>  
      </div>
  )
}

const App = () => {
  const title = 'Superadvanced web phonebook app'
  const name1 = 'John Doe'
  const phone1 = '358401234567'
  const name2 = 'Jane Doe'
  const phone2 = '44551234567'
  const name3 = 'Foo bar'
  const phone3 = '000'

  return (
    <div>
      <Header title={title} />
      <Contents name1={name1}  name2={name2} name3={name3}
      phone1={phone1} phone2={phone2} phone3={phone3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)