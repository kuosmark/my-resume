import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Texts from './Texts.js'
import Images from './Images.js'
import Bio from './Bio.js'
import Skills from './Skills.js'
import Experience from './Experience.js'

const AddRoutes = ({ en }) => (
  <Container>
    <Route exact path='/' render={() => <Redirect to='/fi' />} />
    <Route
      path='/en'
      render={() =>
        en ? (
          <Bio texts={en ? Texts.bio.en : Texts.bio.fi} />
        ) : (
          <Redirect to='/fi' />
        )
      }
    />
    <Route
      path='/fi'
      render={() =>
        !en ? (
          <Bio texts={en ? Texts.bio.en : Texts.bio.fi} />
        ) : (
          <Redirect to='/en' />
        )
      }
    />
    <Route
      path='/skills/en'
      render={() =>
        en ? (
          <Skills
            texts={en ? Texts.skills.en : Texts.skills.fi}
            images={Images}
          />
        ) : (
          <Redirect to='/skills/fi' />
        )
      }
    />
    <Route
      path='/skills/fi'
      render={() =>
        !en ? (
          <Skills
            texts={en ? Texts.skills.en : Texts.skills.fi}
            images={Images}
          />
        ) : (
          <Redirect to='/skills/en' />
        )
      }
    />
    <Route
      path='/experience/en'
      render={() =>
        en ? (
          <Experience texts={en ? Texts.experience.en : Texts.experience.fi} />
        ) : (
          <Redirect to='/experience/fi' />
        )
      }
    />
    <Route
      path='/experience/fi'
      render={() =>
        !en ? (
          <Experience texts={en ? Texts.experience.en : Texts.experience.fi} />
        ) : (
          <Redirect to='/experience/en' />
        )
      }
    />
  </Container>
)

export default AddRoutes
