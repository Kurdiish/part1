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
            <p>{props.contact}  {props.phonenumber}</p>
        </div>
    )
}

const Contents = (props) => {
    return (
        <div>
            <Entry contact={props.contact1} phonenumber={props.phone1} />
            <Entry contact={props.contact2} phonenumber={props.phone2} />
            <Entry contact={props.contact3} phonenumber={props.phone3} />
        </div>
    )
}



const App = () => {
  const title = 'Superadvanced web phonebook app'
  const contact1 = {
    name: 'John Doe',
    phonenumber: '358401234567'
  }
  const contact2 = {
    name: 'Jane Doe',
    phonenumber: '44551234567'
  }
  const contact3 = {
    name: 'Foo bar',
    phonenumber: '000'
  }
  return (
    <div>
      <Header title={title} />
      <Contents contact1={contact1.name} contact2={contact2.name} contact3={contact3.name} 
         phone1={contact1.phonenumber} phone2={contact2.phonenumber} phone3={contact3.phonenumber} /> 
         </div>
  )


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)