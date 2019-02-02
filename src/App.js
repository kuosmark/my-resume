import React, { Component } from 'react'
import markus from './images/markus.jpg'
import java from './images/java.png'
import junit from './images/junit.png'
import bash from './images/bash.png'
import heroku from './images/heroku.png'
import git from './images/git.svg'
import node from './images/node.png'
import python from './images/python.png'
import react from './images/react.png'
import redux from './images/redux.png'
import sqlite from './images/sqlite.svg'
import mongo from './images/mongo.png'
import htmlcss from './images/htmlcss.svg'
import travis from './images/travis.png'

import {
  Divider,
  Header,
  Menu,
  Grid,
  Container,
  Image,
  Flag,
  Icon,
  Item
} from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom'

class App extends Component {
  state = {
    english: false
  }

  changeLanguage = () => {
    this.setState({ english: !this.state.english })
  }

  render() {
    const english = this.state.english

    return (
      <Router>
        <Container>
          <Divider hidden />
          <Menu size='massive' inverted stackable widths={4}>
            <Menu.Item
              name='bio'
              as={NavLink}
              exact
              to={english ? '/en' : '/fi'}
              content={english ? 'Bio' : 'Minä'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name='skills'
              as={NavLink}
              exact
              to={english ? '/skills/en' : '/skills/fi'}
              content={english ? 'Skills' : 'Taidot'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name='experience'
              as={NavLink}
              exact
              to={english ? '/experience/en' : '/experience/fi'}
              content={english ? 'Experience' : 'Kokemus'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              position='right'
              name={english ? 'en' : 'fi'}
              content={<Flag name={english ? 'gb' : 'fi'} />}
              onClick={this.changeLanguage}
            />
          </Menu>

          <Divider hidden />

          <Route exact path='/' render={() => <Redirect to='/fi' />} />

          <Route
            exact
            path='/en'
            render={() =>
              english ? <Bio english={english} /> : <Redirect to='/fi' />
            }
          />

          <Route
            exact
            path='/fi'
            render={() =>
              !english ? <Bio english={english} /> : <Redirect to='/en' />
            }
          />

          <Route
            exact
            path='/skills/en'
            render={() =>
              english ? (
                <Skills english={english} />
              ) : (
                <Redirect to='/skills/fi' />
              )
            }
          />

          <Route
            exact
            path='/skills/fi'
            render={() =>
              !english ? (
                <Skills english={english} />
              ) : (
                <Redirect to='/skills/en' />
              )
            }
          />

          <Route
            exact
            path='/experience/en'
            render={() =>
              english ? (
                <Experience english={english} />
              ) : (
                <Redirect to='/experience/fi' />
              )
            }
          />

          <Route
            exact
            path='/experience/fi'
            render={() =>
              !english ? (
                <Experience english={english} />
              ) : (
                <Redirect to='/experience/en' />
              )
            }
          />
        </Container>
      </Router>
    )
  }
}

const Bio = ({ english }) => {
  return <div />
}

const Skills = ({ english }) => {
  return <div />
}

const Experience = ({ english }) => {
  return <div />
}

const Mina = () => {
  return (
    <div>
      <Grid textAlign='center' columns='equal'>
        <Grid.Row>
          <Grid.Column verticalAlign='middle'>
            <Header as='h1'>Markus Kuosmanen</Header>
            <div>
              <p>
                Opiskelen toista vuotta tietojenkäsittelytiedettä Helsingin
                yliopistossa. Tavoittelen käytännön kokemusta alalta
                hahmottaakseni tulevan urani suuntaa. Positiivisena
                ulospäinsuuntautuneena järjestöaktiivina en pelkää poistua
                mukavuusalueeltani. Kielet ja kirjallisuus ovat intohimojani.
                Kaksikielisyyteni helpottaa uusien kielten omaksumista, tällä
                hetkellä kehitän espanjan ja japanin kielen taitoani.
              </p>
              <br />
              <Item
                as='a'
                href='https://www.google.fi/'
                style={{ color: 'steelblue' }}>
                <div>
                  <p>
                    <Icon name='plane' size='huge' />
                  </p>
                  <p>Tekemäni Travel Tracker -sovellus</p>
                  (React, Redux, Semantic.ui, Node.js, MongoDB)
                </div>
              </Item>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Grid centered>
              <Grid.Row>
                <Grid.Column>
                  <Image
                    src={markus}
                    size={'medium'}
                    centered
                    circular
                    bordered
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <div>
                  <p>
                    <Item
                      as='a'
                      href='https://github.com/kuosmark'
                      style={{ color: 'black' }}>
                      <Icon name='github' size={'huge'} />
                      <strong>github.com/kuosmark</strong>
                    </Item>
                  </p>
                  <p>
                    <Item
                      as='a'
                      href='mailto:markus.kuosmanen@helsinki.fi'
                      style={{ color: 'black' }}>
                      <Icon name='mail' size={'big'} />
                      <strong>markus.kuosmanen@helsinki.fi</strong>
                    </Item>
                  </p>
                  <p>
                    <Icon name='phone' size={'big'} />
                    <strong>+358405569570</strong>
                  </p>
                </div>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Taidot = () => {
  return (
    <div>
      <Grid celled padded verticalAlign='middle' columns='two'>
        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Grid padded celledcentered verticalAlign='center' columns='two'>
              <Grid.Row columns={2}>
                <Grid.Column width={7}>
                  <Divider hidden />
                  <Image src={java} size={'tiny'} centered />
                  <Divider hidden />
                  <Divider hidden />
                  <Image src={junit} size={'small'} centered />
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Divider hidden />
                  <Image src={python} size={'small'} centered />
                  <Divider hidden />
                  <Image src={sqlite} size={'small'} centered />
                  <Divider hidden />
                  <Image src={htmlcss} size={'small'} centered />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>
              Kouluprojekteissani ja omissa koodailuissani käytössä ovat olleet
              Java, Python, Junit, SQLite, HTML ja CSS.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Grid padded centered verticalAlign='center' columns='two'>
              <Grid.Row columns={2}>
                <Grid.Column width={7}>
                  <Image src={react} size={'small'} centered />
                  <Divider hidden />
                  <Divider hidden />
                  <Image src={redux} size={'small'} centered />
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Image src={node} size={'small'} centered />
                  <Image src={mongo} size={'medium'} centered />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>
              Innostuin web-sovelluskehityksestä käytyäni Full Stack -kurssin.
              Tässä sovelluksessani ovat hyödynnettyinä React, Redux, Semantic
              ui, Node.js ja MongoDB.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Grid padded centeredcolumns='two'>
              <Grid.Row columns={2}>
                <Grid.Column width={7}>
                  <Image src={bash} size={'small'} centered />
                  <Divider hidden />
                  <Image src={heroku} size={'small'} centered />
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Image src={git} size={'small'} centered />
                  <Divider hidden />
                  <Divider hidden />
                  <Image src={travis} size={'small'} centered />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>
              Perustaidot Bash ja Git ovat tietojenkäsittelytieteen
              opiskelijalla päivittäisessä käytössä. Herokua käytän sovellusteni
              hostaamiseen.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
    </div>
  )
}

const Kokemus = () => {
  return (
    <div>
      <Grid celled padded verticalAlign='middle' columns='two'>
        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Header
              as='h2'
              icon='fork'
              size='medium'
              content='Ohjelmistoprojekti'
            />
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>
              Kehitimme valmiin ohjelmiston asiakkaan toiveiden mukaan
              Scrum-projektissa liittyen ohjelmistotuotantokurssiin.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Header
              as='h2'
              icon='users'
              size='medium'
              content='Järjestötoiminta'
            />
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>
              Olen ollut mukana järjestämässä koko yliopiston laajuisia
              tapahtumia sekä oman ainejärjestöni tapahtumia. Toimin
              Ylioppilaskunnan tapahtumavaliokunnan varapuheenjohtajana. Lisäksi
              olen mukana oman ainejärjestöni toiminnassa järjestämässä
              tapahtumia. Tulen toimimaan tuutorina uusille opiskelijoille
              tulevana syksynä.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Header
              as='h2'
              icon='heartbeat'
              size='medium'
              content='Kaunialan sairaala Oy'
            />
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>
              Kesätyö Kauniaisissa vuosina 2016 ja 2017 osastoapulaisena
              siivous- ja keittiötehtävissä.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Header
              as='h2'
              icon='newspaper'
              size='medium'
              content='Koskijakelut Oy'
            />
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>Kesätyö Pirkanmaalla, lehtienjakelu 2014</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Header
              as='h2'
              icon='heartbeat'
              size='medium'
              content='Tampereen yliopistollinen sairaala'
            />
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>Kesätyö Tampereella osastoapulaisena TAYSissa 2013</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <Header
              as='h2'
              icon='shopping basket'
              size='medium'
              content='Pirkanmaan osuuskauppa'
            />
          </Grid.Column>
          <Grid.Column width={5} textAlign='center'>
            <p>Kesätyö lähikaupassa 2012</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
    </div>
  )
}

export default App
