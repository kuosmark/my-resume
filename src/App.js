import React, { Component } from 'react'
import myImage from './images/me2.jpg'
import { Menu, Grid, Container, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class MainMenu extends Component {
  state = { activeItem: 'whoami' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const activeItem = this.state.activeItem

    return (
      <Menu stackable inverted /*pointing secondary*/>
        <Menu.Item
          name='whoami'
          as={NavLink}
          exact to='/'
          active={activeItem === 'whoami'}
          content='Who am I?'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='skills'
          as={NavLink}
          exact to='/skills'
          active={activeItem === 'skills'}
          content='Skills'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='experience'
          as={NavLink}
          exact to='/experience'
          active={activeItem === 'experience'}
          content='Experience'
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

const App = () => {

  const style = { margin: 10 }

  return (
    <Container>
      <Router>
        <div>
          <h1 style={style}>Markus Kuosmanen</h1>
          <MainMenu />
          <div>
            <Route exact path='/'
              render={() => <Me />} />
            <Route exact path="/skills"
              render={() => <Skills />} />
            <Route exact path='/experience'
              render={() => <Experience />} />
          </div>
        </div>
      </Router>
    </Container>
  )
}

const Me = () => {
  return (
    <div>
      <p>My name is Markus.</p>
      <Image src={myImage} size={'small'} centered circular bordered />
    </div>
  )
}

const Skills = () => {
  return (
    <div>
      <Grid /*celled*/ divided columns={3}>
        <Grid.Row>
        <Grid.Column>
          <div>1.1</div>
        </Grid.Column>
        <Grid.Column>
          <div>1.2</div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <div>2.1</div>
        </Grid.Column>
        <Grid.Column>
          <div>2.2</div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      </Grid.Row>
      <Grid.Row>
      </Grid.Row>
      </Grid>
    </div >
  )
}

const Experience = () => {
  return (
    <div>
      <p>This is my experience.</p>
    </div>
  )
}

export default App
