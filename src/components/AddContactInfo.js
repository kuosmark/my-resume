import React from 'react'
import { Grid, Icon, Image, Item } from 'semantic-ui-react'
import markus from '../images/markus.jpg'

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

export default AddContactInfo
