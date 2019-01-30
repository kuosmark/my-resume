import React, { Component } from 'react'
import myImage from './images/me2.jpg'
import htmlImage from './images/html5.png'
import { Menu, Grid, Container, Image, Flag, Icon, Item } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'

class App extends Component {
  state = {
    language: 'fi',
    activeItem: 'whoami'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  changeLanguage = (e, { name }) => {
    this.setState({ language: name })
  }

  render() {
    const style = { margin: 10, color: 'white' }
    const activeItem = this.state.activeItem
    const language = this.state.language

    return (
      < Container>
        <Router>
          <div>
            <h1 style={style}>Markus Kuosmanen</h1>

            <Menu stackable fluid widths={5} inverted /*pointing secondary*/>
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

            <Route exact path='/'
              render={() => <Redirect to='/fi' />} />

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
    <div style={{ color: 'white' }}>
      <p>My name is Markus.</p>
      <p>BIO</p>
      <p>MY LIFE GOALS</p>
      <p>Contact, Intro, Skillset, Job History, Other</p>
      <em><strong>Personal growth happens outside your comfort zone.</strong></em>
      <p>Second year computer science student at University of Helsinki.</p>
      <Image src={myImage} size={'small'} centered circular bordered />
    </div>
  )
}

const Mina = () => {
  return <Grid columns='equal'>
    <Grid.Column >
      <div style={{ color: 'white' }}>
        <p>
          Toisen vuoden tietojenkäsittelytieteen opiskelija Helsingin yliopistossa.
          Tavoitteena kehittyä ohjelmoijana ja ihmisenä. Positiivinen, innokas oppimaan uutta, ulospäin suuntautunut.
          En pelkää haasteita, henkilökohtainen kasvu tapahtuu oman mukavuusalueen ulkopuolella.
          Kielet.
    </p>
        <p>mini, tiny, small, large, big, huge, massive</p>
        <br />
        <br />
        <p>Education
        • University of Helsinki, Computer Science (2017 - 2022)
        • Työväen Akatemia (2016 - 2017)
        • Akaan lukio (2012 - 2015)

    Experience
        • Kaunialan Sairaala Oy (10.04.2017 – 25.07.2017)
        • Kaunialan Sairaala Oy (25.04.2016 – 31.08.2016)
        • Koskijakelut Oy (14.06.2014 – 23.07.2014)
        • Tampereen yliopistollinen sairaala (01.07.2013 – 28.07.2013)

    Languages
        • Finnish: Mother tongue
        • Swedish: Mother tongue
    • English: Fluent</p>
      </div>
    </Grid.Column>
    <Grid.Column>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Image src={myImage} size={'medium'} centered circular bordered />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Item
            as='a'
            href='https://github.com/kuosmark'
            style={{ color: 'white' }}
            centered>
            <Icon
              name='github'
              size='huge'
            />
          </Item>
          <div>
            <p><Icon
              name='phone'
              style={{ color: 'white' }} />
              <strong style={{ color: 'white' }}>+358405569570</strong></p>
            <p><Icon
              name='mail'
              style={{ color: 'white' }}
            /><strong style={{ color: 'white' }}>markus.kuosmanen@helsinki.fi</strong>
            </p>
          </div>
        </Grid.Row>
      </Grid>
    </Grid.Column>
  </Grid>
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
