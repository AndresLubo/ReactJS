import React, { Component } from "react";


const User = (props) => {
  return (
    <figure>
      <figcaption>{props.name}</figcaption>
      <figcaption>{props.company.name}</figcaption>
    </figure>
  )
}
export default class AjaxApis extends Component {

  state = {
    users: []
  }

  componentDidMount(){
    let url = `https://jsonplaceholder.typicode.com/users`

    fetch(url).then(res => res.json()).then(data => this.setState({users: data})).catch(err => console.error(err))
    
  }
  render() {
    return (
      <div>
        <h2>Peticiones asíncronas en componentes de clase</h2>
        <ol>
          {
            this.state.users.map(user => {
              return <User key={user.id} name={user.name} company={user.company}/>
            })
          }
        </ol>
      </div>
    );
  }
}
