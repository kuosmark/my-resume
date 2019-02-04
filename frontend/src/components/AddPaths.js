import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Bio from './Bio'
import Skills from './Skills'
import Experience from './Experience'

const AddPaths = ({ images, texts, paths }) => (
  <Container>
    <Route path={paths[0]} render={() => <Bio texts={texts.bio} />} />
    <Route
      path={paths[1]}
      render={() => <Skills texts={texts.skills} images={images} />}
    />
    <Route
      path={paths[2]}
      render={() => <Experience texts={texts.experience} />}
    />
    <Route path={paths[3]} render={() => <Redirect to={paths[0]} />} />
    <Route path={paths[4]} render={() => <Redirect to={paths[1]} />} />
    <Route path={paths[5]} render={() => <Redirect to={paths[2]} />} />
  </Container>
)

export default AddPaths
