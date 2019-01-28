import React, { Component } from 'react'
import myImage from './images/me2.jpg'
import htmlImage from './images/html5.png'
import { Menu, Grid, Container, Image, Flag } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'

class App extends Component {
  state = {
    language: 'en',
    activeItem: 'whoami'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  changeLanguage = (e, { name }) => {
    this.setState({ language: name })
  }

  render() {
    const style = { margin: 10 }
    const activeItem = this.state.activeItem
    const language = this.state.language

    return (
      < Container >
        <Router>
          <div>
            <h1 style={style}>Markus Kuosmanen</h1>

            <Menu stackable inverted /*pointing secondary*/>
              <Menu.Item
                name='whoami'
                as={NavLink}
                exact to={language === 'en' ? '/en' : '/fi'}
                active={activeItem === 'whoami'}
                content={language === 'en' ? 'Who am I?' : 'Kuka olen?'}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                name='skills'
                as={NavLink}
                exact to={language === 'en' ? '/skills/en' : '/skills/fi'}
                active={activeItem === 'skills'}
                content={language === 'en' ? 'Skills' : 'Taidot'}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                name='experience'
                as={NavLink}
                exact to={language === 'en' ? '/experience/en' : '/experience/fi'}
                active={activeItem === 'experience'}
                content={language === 'en' ? 'Experience' : 'Kokemus'}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                name='interests'
                as={NavLink}
                exact to={language === 'en' ? '/interests/en' : '/interests/fi'}
                active={activeItem === 'interests'}
                content={language === 'en' ? 'Interests' : 'Kiinnostukset'}
                onClick={this.handleItemClick}
              />

              <Menu.Menu position='right' >
                {language === 'fi' ?
                  <Menu.Item
                    name='en'
                    active={activeItem === 'toEnglish'}
                    content={<Flag name='gb' />}
                    onClick={this.changeLanguage}
                  />
                  :
                  <Menu.Item
                    name='fi'
                    active={activeItem === 'toFinnish'}
                    content={<Flag name='fi' />}
                    onClick={this.changeLanguage}
                  />}
              </Menu.Menu>

            </Menu >
            <Route exact path='/en'
              render={() => language === 'en' ? (<Me />) :
                <Redirect to='/fi' />} />

            <Route exact path='/fi'
              render={() => language === 'fi' ? (<Mina />) :
                <Redirect to='/en' />} />

            <Route exact path='/skills/en'
              render={() => language === 'en' ? (<Skills />) :
                <Redirect to='/skills/fi' />} />

            <Route exact path='/skills/fi'
              render={() => language === 'fi' ? (<Taidot />) :
                <Redirect to='/skills/en' />} />

            <Route exact path='/experience/en'
              render={() => language === 'en' ? (<Experience />) :
                <Redirect to='/experience/fi' />} />

            <Route exact path='/experience/fi'
              render={() => language === 'fi' ? (<Kokemus />) :
                <Redirect to='/experience/en' />} />

            <Route exact path='/interests/en'
              render={() => language === 'en' ? (<Interests />) :
                <Redirect to='/interests/fi' />} />

            <Route exact path='/interests/fi'
              render={() => language === 'fi' ? (<Kiinnostukset />) :
                <Redirect to='/interests/en' />} />
          </div>
        </Router>
      </Container >
    )
  }
}

const Me = () => {
  return (
    <div>
      <p>My name is Markus.</p>
      <p>BIO</p>
      <p>MY LIFE GOALS</p>
      <p>Contact, Intro, Skillset, Job History, Other</p>
      <Image src={myImage} size={'small'} centered circular bordered />
    </div>
  )
}

const Mina = () => {
  return <div>Olen suomalainen.</div>
}

const Skills = () => {
  return (
    <div>
      <Grid /*celled*/ divided columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Image src={htmlImage} size={'small'} centered />
          </Grid.Column>
          <Grid.Column>
            <div>I have skills in HTML.</div>
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

const Taidot = () => {
  return <div>Taitoni ovat:</div>
}

const Experience = () => {
  return (
    <div>
      <p>This is my experience.</p>
    </div>
  )
}

const Kokemus = () => {
  return <div>Tässä on kokemukseni.</div>
}

const Interests = () => {
  return <div>My interests.</div>
}

const Kiinnostukset = () => {
  return <div>Kiinnostukseni.</div>
}

export default App
