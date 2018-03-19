import React, {Component} from 'react'


export default class NavigationComponent extends Component{
constructor(props){
  super(props)
  this.state = {
    title:''
  }
}

titleHandler = (e) =>{
  this.setState({
    title:e.target.value
  })
}





  render(){
    return (<div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><a href="#">Institution</a></li>
            <li><a href="#books">Books</a></li>
            <li>
              <div className="navbar-form">
                <input className="form-control"type="text" value={this.state.title} placeholder="Page title" onChange={this.titleHandler} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <h2>{this.state.title}</h2>
      </div>
    )
  }
}



