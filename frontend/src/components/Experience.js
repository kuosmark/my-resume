import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import AddExperienceRow from './AddExperienceRow'

const Experience = ({ texts }) => (
  <Container style={{ fontSize: 'medium' }}>
    <Grid celled verticalAlign='middle' columns={2}>
      <AddExperienceRow
        icon='fork'
        firstText={texts[0]}
        secondText={texts[1]}
      />
      <AddExperienceRow
        icon='users'
        firstText={texts[2]}
        secondText={texts[3]}
      />
      <AddExperienceRow
        icon='heartbeat'
        firstText={texts[4]}
        secondText={texts[5]}
      />
    </Grid>
  </Container>
)

export default Experience
