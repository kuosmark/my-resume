import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import {
  Container,
  Divider,
  Flag,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Menu
} from 'semantic-ui-react'

import bash from './images/bash.png'
import git from './images/git.svg'
import heroku from './images/heroku.png'
import htmlcss from './images/htmlcss.svg'
import java from './images/java.png'
import junit from './images/junit.png'
import markus from './images/markus.jpg'
import mongo from './images/mongo.png'
import node from './images/node.png'
import python from './images/python.png'
import react from './images/react.png'
import redux from './images/redux.png'
import sqlite from './images/sqlite.svg'
import travis from './images/travis.png'

const AddMenu = ({ en, change }) => (
  <Menu size='massive' inverted stackable widths={4}>
    <Menu.Item
      as={Link}
      to={en ? '/en' : '/fi'}
      content={en ? 'Bio' : 'Minä'}
    />
    <Menu.Item
      as={Link}
      to={en ? '/skills/en' : '/skills/fi'}
      content={en ? 'Skills' : 'Taidot'}
    />
    <Menu.Item
      as={Link}
      to={en ? '/experience/en' : '/experience/fi'}
      content={en ? 'Experience' : 'Kokemus'}
    />
    <Menu.Item
      position='right'
      content={<Flag name={en ? 'fi' : 'gb'} />}
      onClick={change}
    />
  </Menu>
)

const AddRoutes = ({ en }) => (
  <Container>
    <Route exact path='/' render={() => <Redirect to='/fi' />} />
    <Route
      path='/en'
      render={() =>
        en ? (
          <Bio data={en ? DATA.bio.en : DATA.bio.fi} />
        ) : (
          <Redirect to='/fi' />
        )
      }
    />
    <Route
      path='/fi'
      render={() =>
        !en ? (
          <Bio data={en ? DATA.bio.en : DATA.bio.fi} />
        ) : (
          <Redirect to='/en' />
        )
      }
    />
    <Route
      path='/skills/en'
      render={() =>
        en ? (
          <Skills data={en ? DATA.skills.en : DATA.skills.fi} />
        ) : (
          <Redirect to='/skills/fi' />
        )
      }
    />
    <Route
      path='/skills/fi'
      render={() =>
        !en ? (
          <Skills data={en ? DATA.skills.en : DATA.skills.fi} />
        ) : (
          <Redirect to='/skills/en' />
        )
      }
    />
    <Route
      path='/experience/en'
      render={() =>
        en ? (
          <Experience data={en ? DATA.experience.en : DATA.experience.fi} />
        ) : (
          <Redirect to='/experience/fi' />
        )
      }
    />
    <Route
      path='/experience/fi'
      render={() =>
        !en ? (
          <Experience data={en ? DATA.experience.en : DATA.experience.fi} />
        ) : (
          <Redirect to='/experience/en' />
        )
      }
    />
  </Container>
)

class App extends Component {
  state = {
    english: false
  }

  changeLanguage = () => {
    this.setState({ english: !this.state.english })
  }

  render() {
    return (
      <Router>
        <Container>
          <Divider hidden />
          <AddMenu en={this.state.english} change={this.changeLanguage} />
          <Divider hidden />
          <Divider hidden />
          <AddRoutes en={this.state.english} />
        </Container>
      </Router>
    )
  }
}

const AddContactInfo = () => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column>
        <Image src={markus} size={'medium'} centered circular bordered />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Item.Group>
        <Item
          as='a'
          href='https://github.com/kuosmark'
          style={{ color: 'black' }}>
          <Item.Content verticalAlign='middle'>
            <Icon name='github' size={'huge'} />
            <b>github.com/kuosmark</b>
          </Item.Content>
        </Item>
        <Item
          as='a'
          href='mailto:markus.kuosmanen@helsinki.fi'
          style={{ color: 'black' }}>
          <Item.Content verticalAlign='middle'>
            <Icon name='mail' size={'big'} />
            <b>markus.kuosmanen@helsinki.fi</b>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content verticalAlign='middle'>
            <Icon name='phone' size={'big'} />
            <b>+358405569570</b>
          </Item.Content>
        </Item>
      </Item.Group>
    </Grid.Row>
  </Grid>
)

const Bio = ({ data }) => (
  <Grid textAlign='center' columns='equal'>
    <Grid.Column verticalAlign='middle'>
      <Header as='h1'>Markus Kuosmanen</Header>
      {data[0]}
      <Divider hidden />
      <Item as='a' href='https://www.google.fi/'>
        <Icon name='plane' size='huge' s />
        <Container>{data[1]}</Container>
        {data[2]}
      </Item>
    </Grid.Column>
    <Grid.Column>
      <AddContactInfo />
    </Grid.Column>
  </Grid>
)

const Skills = ({ data }) => (
  <Container>
    <Grid celled padded verticalAlign='middle' columns='two'>
      <Grid.Row centered>
        <Grid.Column textAlign='center'>
          <Grid padded centered verticalAlign='center' columns='two'>
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
          {data[0]}
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
          {data[1]}
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
          {data[2]}
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
  </Container>
)

const Experience = ({ data }) => (
  <Container>
    <Grid celled padded verticalAlign='middle' columns='two'>
      <Grid.Row centered>
        <Grid.Column textAlign='center'>
          <Header as='h2' icon='fork' size='medium' content={data[0]} />
        </Grid.Column>
        <Grid.Column width={5} textAlign='center'>
          <p>{data[1]}</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Grid.Column textAlign='center'>
          <Header as='h2' icon='users' size='medium' content={data[2]} />
        </Grid.Column>
        <Grid.Column width={5} textAlign='center'>
          <p>{data[3]}</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Grid.Column textAlign='center'>
          <Header as='h2' icon='heartbeat' size='medium' content={data[4]} />
        </Grid.Column>
        <Grid.Column width={5} textAlign='center'>
          <p>{data[5]} </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Grid.Column textAlign='center'>
          <Header as='h2' icon='newspaper' size='medium' content={data[6]} />
        </Grid.Column>
        <Grid.Column width={5} textAlign='center'>
          <p>{data[7]}</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Grid.Column textAlign='center'>
          <Header as='h2' icon='heartbeat' size='medium' content={data[8]} />
        </Grid.Column>
        <Grid.Column width={5} textAlign='center'>
          <p>{data[9]}</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Grid.Column textAlign='center'>
          <Header
            as='h2'
            icon='shopping basket'
            size='medium'
            content={data[10]}
          />
        </Grid.Column>
        <Grid.Column width={5} textAlign='center'>
          <p>{data[11]}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
  </Container>
)

const DATA = {
  bio: {
    en: [
      'I am a student and all that...',
      'The Travel Tracker application I made',
      '(React, Redux, Semantic.ui, Node.js, MongoDB)'
    ],
    fi: [
      'Opiskelen toista vuotta tietojenkäsittelytiedettä Helsingin yliopistossa.\
    Odotan innolla mahdollisuutta kokemusta alalta. saada kokemusta Tavoittelen\
    käytännön kokemusta alaltahahmottaakseni tulevan urani suuntaa. Positiivisena\
    ulospäinsuuntautuneena järjestöaktiivina en pelkää poistuamukavuusalueeltani.\
    Kielet ja kirjallisuus ovat intohimojani.Kaksikielisyyteni helpottaa uusien kielten\
    omaksumista, tällähetkellä kehitän espanjan ja japanin kielen taitoani.\
    Jatkuva kehitys Pikkutarkkuus Communication skills',
      'Tekemäni Travel Tracker -sovellus',
      '(React, Redux, Semantic.ui, Node.js, MongoDB)'
    ]
  },
  skills: {
    en: ['Java,...', 'React,...', 'Bash,...'],
    fi: [
      'Kouluprojekteissani ja omissa koodailuissani käytössä ovat olleet Java, Python, Junit, SQLite, HTML ja CSS.',
      'Innostuin web-sovelluskehityksestä käytyäni Full Stack -kurssin.Tässä sovelluksessani ovat hyödynnettyinä React, Redux, Semanticui, Node.js ja MongoDB.',
      'Perustaidot Bash ja Git ovat tietojenkäsittelytieteenopiskelijalla päivittäisessä käytössä. Herokua käytän sovellustenihostaamiseen.'
    ]
  },
  experience: {
    en: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    fi: [
      'Ohjelmistoprojekti',
      'Kehitimme valmiin ohjelmiston asiakkaan toiveiden mukaan Scrum-projektissa liittyen ohjelmistotuotantokurssiin.',
      'Järjestötoiminta',
      'Olen ollut mukana järjestämässä koko yliopiston laajuisia\
      tapahtumia sekä oman ainejärjestöni tapahtumia. Toimin\
      Ylioppilaskunnan tapahtumavaliokunnan varapuheenjohtajana. Lisäksi\
      olen mukana oman ainejärjestöni toiminnassa järjestämässä\
      tapahtumia. Tulen toimimaan tuutorina uusille opiskelijoille\
      tulevana syksynä.',
      'Kaunialan sairaala Oy',
      'Kesätyö Kauniaisissa vuosina 2016 ja 2017 osastoapulaisena siivous- ja keittiötehtävissä.',
      'Koskijakelut Oy',
      'Kesätyö Pirkanmaalla, lehtienjakelu 2014',
      'Tampereen yliopistollinen sairaala',
      'Kesätyö Tampereella osastoapulaisena TAYSissa 2013',
      'Pirkanmaan osuuskauppa',
      'Kesätyö lähikaupassa 2012'
    ]
  }
}

export default App
