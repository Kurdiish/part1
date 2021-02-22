import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.phonebookapp}</h1>
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
            <Entry contact={props.contacts[0].name} phonenumber={props.contacts[0].phonenumber} />
            <Entry contact={props.contacts[1].name} phonenumber={props.contacts[1].phonenumber} />
            <Entry contact={props.contacts[2].name} phonenumber={props.contacts[2].phonenumber} />
        </div>
    )
}




const App = () => {
  const phonebookapp = {
    title: 'Superadvanced web phonebook app',
    contacts: [
    {
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    {
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      name: 'Foo bar',
      phonenumber: '000'
    }
    ]
  }

  return (
    <div>
      <Header phonebookapp={phonebookapp.title} />
      <Contents contacts={phonebookapp.contacts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)