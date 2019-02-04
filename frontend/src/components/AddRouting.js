import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Images from './Images'
import AddPaths from './AddPaths'
import PathData from './PathData'

const AddRouting = ({ en, data }) => (
  <Container>
    <Route exact path='/' render={() => <Redirect to='/bio/fi' />} />
    <AddPaths
      images={Images}
      texts={en ? data.en : data.fi}
      paths={en ? PathData.en : PathData.fi}
    />
  </Container>
)

export default AddRouting
