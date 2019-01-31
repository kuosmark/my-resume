import React, { Component } from 'react'
import myImage from './images/me2.jpg'
import html from './images/html5.png'
import css from './images/css3.svg'
import java from './images/java.png'
import junit from './images/junit.png'
import bash from './images/bash.png'
import heroku from './images/heroku.png'
import flask from './images/flask.png'
import git from './images/git.svg'
import node from './images/nodejs.png'
import python from './images/python.svg'
import react from './images/react.png'
import redux from './images/redux.png'
import sqlite from './images/sqlite.svg'
import mongo from './images/mongodb.png'
import pgsql from './images/postgresql.png'

import { List, Header, Menu, Grid, Container, Image, Flag, Icon, Item } from 'semantic-ui-react'
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
    const style = { margin: 10 }
    const activeItem = this.state.activeItem
    const language = this.state.language

    return (
      <Router>
        <Container>
          <br />
          <Menu size='huge' stackable fluid widths={5} inverted>
            <Menu.Item
              name='me'
              as={NavLink}
              exact to={language === 'en' ? '/en' : '/fi'}
              active={activeItem === 'me'}
              content={language === 'en' ? 'Me' : 'Minä'}
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
          <br />

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
        </Container>
      </Router>
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
      <em><strong>Personal growth happens outside your comfort zone.</strong></em>
      <p>Second year computer science student at University of Helsinki.</p>
      <Image src={myImage} size={'small'} centered circular bordered />
    </div>
  )
}

const Mina = () => {
  return <div>
    <Grid textAlign='center' columns='equal'>
      <Grid.Column verticalAlign='middle'>
        <Header padded as='h1'>
          Markus Kuosmanen
             </Header>
        <div >
          <p>
            Opiskelen toista vuotta tietojenkäsittelytiedettä Helsingin yliopistossa.
            Tavoittelen käytännön kokemusta alalta hahmottaakseni tulevan urani suuntaa.
            Positiivisena ulospäinsuuntautuneena järjestöaktiivina en pelkää poistua mukavuusalueeltani.
            Kielet ja kirjallisuus ovat intohimojani. Kaksikielisyyteni helpottaa uusien kielten omaksumista, tällä hetkellä kehitän espanjan ja japanin kielen taitoani.
          </p>
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
            <div>
              <p><Item
                as='a'
                href='https://github.com/kuosmark'
                style={{ color: 'black' }}
                centered><Icon
                  name='github'
                  size={'huge'}
                />
                <strong>github.com/kuosmark</strong>
              </Item></p>
              <p>
                <Item
                  as='a'
                  href='mailto:markus.kuosmanen@helsinki.fi'
                  style={{ color: 'black' }}
                  centered><Icon
                    name='mail'
                    size={'big'}
                  /><strong >markus.kuosmanen@helsinki.fi</strong>
                </Item>
              </p>
              <p><Icon
                name='phone'
                size={'big'}
              />
                <strong >+358405569570</strong></p>
            </div>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid >
  </div>
}

const Skills = () => {
  return (
    <Grid celled padded divided columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Image src={html} size={'small'} centered />
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
  )
}

const Taidot = () => {
  return <Grid celled centered verticalAlign='middle' padded relaxed='very' columns='two' divided>

    <Grid.Row>
      <Grid.Column textAlign='center'>
        <Image src={java} size={'mini'} />
        <Image src={python} size={'tiny'} />
        <Image src={junit} size={'tiny'} />
        <Image src={sqlite} size={'tiny'} />
        <Image src={html} size={'tiny'} />
        <Image src={css} size={'tiny'} />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <p>Kouluprojekteissani ja omissa koodailuissani käytössä ovat olleet Java, Python, Junit, SQLite, HTML ja CSS.</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src={react} size={'tiny'} />
        <Image src={redux} size={'tiny'} />
        <Image src={node} size={'tiny'} />
        <Image src={mongo} size={'tiny'} />
      </Grid.Column>
      <Grid.Column>
        <p>Innostuin web-sovelluskehityksestä käytyäni Full Stack -kurssin.
Tässä sovelluksessani ovat hyödynnettyinä React, Redux, Node.js ja MongoDB.
</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src={bash} size={'tiny'} />
        <Image src={git} size={'tiny'} />
        <Image src={heroku} size={'tiny'} />
      </Grid.Column>
      <Grid.Column>
        <p>Perustaidot Bash ja Git ovat tietojenkäsittelytieteen opiskelijalla päivittäisessä käytössä. Herokua käytän sovellusteni hostaamiseen.</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}

const Experience = () => {
  return (
    <div>
      <p>This is my experience.</p>
    </div>
  )
}

const Kokemus = () => {
  return <Grid relaxed='very' padded centered>
    <Grid.Row>
      <Header as='h2' icon='user' size='medium' content='Järjestötoiminta' centered />
      <p>Olen ollut mukana järjestämässä koko yliopiston laajuisia tapahtumia sekä oman ainejärjestöni tapahtumia. Toimin Ylioppilaskunnan tapahtumavaliokunnan varapuheenjohtajana. Lisäksi olen mukana oman ainejärjestöni toiminnassa järjestämässä tapahtumia. Tulen toimimaan tuutorina uusille opiskelijoille tulevana syksynä.
</p>
      <br />
    </Grid.Row>
    <Grid.Row>
      <Header as='h2' icon='heartbeat' size='medium' content='Kaunialan sairaala Oy' centered />
      <p>Kesätyö Kauniaisissa vuosina 2016 ja 2017 osastoapulaisena siivous- ja keittiötehtävissä.</p>
      <br />
    </Grid.Row>
    <Grid.Row>
      <Header as='h2' icon='newspaper' size='medium' content='Koskijakelut Oy' centered />
      <p>Kesätyö Pirkanmaalla, lehtienjakelu 2014</p>
      <br />
    </Grid.Row>
    <Grid.Row>
      <Header as='h2' icon='heartbeat' size='medium' content='Tampereen yliopistollinen sairaala' centered />
      <p>Kesätyö Tampereella osastoapulaisena TAYSissa 2013</p>
      <br />
    </Grid.Row>
    <Grid.Row>
      <Header as='h2' icon='shopping basket' size='medium' content='Pirkanmaan osuuskauppa' centered />
      <p>Kesätyö lähikaupassa 2012</p>
      <br />
    </Grid.Row>
  </Grid >
}

export default App
