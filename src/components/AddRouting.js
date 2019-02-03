import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Images from './Images'
import Texts from './Texts'
import PathData from './PathData'
import AddPaths from './AddPaths'

const AddRouting = ({ en }) => (
  <Container>
    <Route exact path='/' render={() => <Redirect to='/fi' />} />
    <AddPaths
      images={Images}
      texts={en ? Texts.en : Texts.fi}
      paths={en ? PathData.en : PathData.fi}
    />
  </Container>
)

export default AddRouting
