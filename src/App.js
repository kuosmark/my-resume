import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Divider } from 'semantic-ui-react'
import AddMenu from './components/AddMenu'
import AddRouting from './components/AddRouting'

class App extends Component {
  state = {
    english: false
  }

  changeLanguage = () => this.setState({ english: !this.state.english })

  render() {
    return (
      <Router>
        <Container>
          <Divider hidden />
          <AddMenu en={this.state.english} change={this.changeLanguage} />
          <Divider hidden />
          <Divider hidden />
          <AddRouting en={this.state.english} />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
        </Container>
      </Router>
    )
  }
}

export default App
