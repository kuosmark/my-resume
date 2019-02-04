import React from 'react'
import { Container, Divider, Grid, Header, Icon, Item } from 'semantic-ui-react'
import AddContactInfo from './AddContactInfo'

const Bio = ({ texts }) => (
  <Grid style={{ fontSize: 'medium' }} textAlign='center' columns='equal'>
    <Grid.Column verticalAlign='middle'>
      <Header as='h1'>Markus Kuosmanen</Header>
      <Container style={{ fontSize: 'medium' }}>{texts[0]}</Container>
      <Divider hidden />
      <Item as='a' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        <Icon name='plane' size='huge' />
        <Container>{texts[1]}</Container>
        {texts[2]}
      </Item>
    </Grid.Column>
    <Grid.Column>
      <AddContactInfo />
    </Grid.Column>
  </Grid>
)

export default Bio
