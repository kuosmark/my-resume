import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import AddSkillRow from './AddSkillRow'

const Skills = ({ texts, images }) => (
  <Container style={{ fontSize: 'medium' }}>
    <Grid celled columns='equal' verticalAlign='middle'>
      <AddSkillRow
        text={texts[0]}
        firstColumn={images[0]}
        secondColumn={images[1]}
      />
      <AddSkillRow
        text={texts[1]}
        firstColumn={images[2]}
        secondColumn={images[3]}
      />
      <AddSkillRow
        text={texts[2]}
        firstColumn={images[4]}
        secondColumn={images[5]}
      />
    </Grid>
  </Container>
)

export default Skills
