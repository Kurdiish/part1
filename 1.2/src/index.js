import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
      <div>
          <h1>{props.title}</h1>
      </div>
  )
}

const Entry = (props) => {
  return (
      <div>
          <p>{props.name}  {props.phonenumber}</p>
      </div>
  )
}

const Contents = (props) => {
  return (
    <div>
        <Entry name={props.name1} phonenumber={props.phone1} />
        <Entry name={props.name2} phonenumber={props.phone2} />
        <Entry name={props.name3} phonenumber={props.phone3} />
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