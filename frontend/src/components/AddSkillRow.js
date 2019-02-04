import React from 'react'
import { Grid } from 'semantic-ui-react'

const AddSkillRow = ({ text, firstColumn, secondColumn }) => (
  <Grid.Row centered>
    <Grid.Column textAlign='center'>
      <Grid padded centered verticalAlign='middle'>
        <Grid.Row columns={2}>
          <Grid.Column>{firstColumn}</Grid.Column>
          <Grid.Column>{secondColumn}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Column>
    <Grid.Column textAlign='center'>{text}</Grid.Column>
  </Grid.Row>
)

export default AddSkillRow
