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
            <Entry contact={props.contacts[0].name} phonenumber={props.contacts[0].phonenumber} />
            <Entry contact={props.contacts[1].name} phonenumber={props.contacts[1].phonenumber} />
            <Entry contact={props.contacts[2].name} phonenumber={props.contacts[2].phonenumber} />
        </div>
    )
}

const App = () => {
  const title = 'Superadvanced web phonebook app'
  const contacts = [
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
  return (
    <div>
      <Header title={title} />
      <Contents contacts={contacts}/>   
      </div>
  )


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// 1.3
// const App = () => {
//   const title = 'Superadvanced web phonebook app'
//   const contact1 = {
//     name: 'John Doe',
//     phonenumber: '358401234567'
//   }
//   const contact2 = {
//     name: 'Jane Doe',
//     phonenumber: '44551234567'
//   }
//   const contact3 = {
//     name: 'Foo bar',
//     phonenumber: '000'
//   }
//   return (
//     <div>
//       <Header title={title} />
//       <Contents contact1={contact1.name} contact2={contact2.name} contact3={contact3.name} 
//          phone1={contact1.phonenumber} phone2={contact2.phonenumber} phone3={contact3.phonenumber} /> 
//          </div>
//   )


// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )