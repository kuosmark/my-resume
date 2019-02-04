import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const AddExperienceRow = ({ icon, firstText, secondText }) => (
  <Grid.Row centered>
    <Grid.Column textAlign='center'>
      <Grid padded centered verticalAlign='middle'>
        <Grid.Row>
          <Header as='h2' icon={icon} size='medium' content={firstText} />
        </Grid.Row>
      </Grid>
    </Grid.Column>
    <Grid.Column textAlign='center'>{secondText}</Grid.Column>
  </Grid.Row>
)

export default AddExperienceRow
