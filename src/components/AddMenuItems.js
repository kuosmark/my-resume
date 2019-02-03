import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Flag, Menu } from 'semantic-ui-react'

const AddMenuItems = ({ data, change }) => (
  <Container>
    <Menu.Item as={Link} to={data[0]} content={data[1]} />
    <Menu.Item as={Link} to={data[2]} content={data[3]} />
    <Menu.Item as={Link} to={data[4]} content={data[5]} />
    <Menu.Item
      position='right'
      content={<Flag name={data[6]} />}
      onClick={change}
    />
  </Container>
)

export default AddMenuItems
