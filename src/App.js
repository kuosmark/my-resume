import React from 'react'
import myImage from './images/me2.jpg'
import { Container, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const App = () => {

  const style = { margin: 10 }

  return (
    <Container>
      <Router>
        <div>
          <h1 style={style}>Markus Kuosmanen</h1>
          <LinkMenu />
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
      <p>These are my skills.</p>
    </div>
  )
}

const Experience = () => {
  return (
    <div>
      <p>This is my experience.</p>
    </div>
  )
}

const LinkMenu = () => {

  const style = {
    border: 'solid',
    margin: 10,
    padding: 10,
    backgroundColor: 'lightSkyBlue'
  }

  const activeStyle = { color: 'black' }

  return (
    <div style={style}>
      <NavLink exact to='/' activeStyle={activeStyle}>
        Who am I?</NavLink>&nbsp;
    <NavLink exact to='/skills' activeStyle={activeStyle}>
        Skills</NavLink>&nbsp;
    <NavLink exact to='/experience' activeStyle={activeStyle}>
        Experience</NavLink>&nbsp;
    </div>
  )

}

export default App
