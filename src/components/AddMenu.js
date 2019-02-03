import React from 'react'
import { Link } from 'react-router-dom'
import { Flag, Menu } from 'semantic-ui-react'

const AddMenu = ({ en, change }) => (
  <Menu size='massive' inverted stackable widths={4}>
    <Menu.Item
      as={Link}
      to={en ? '/en' : '/fi'}
      content={en ? 'Bio' : 'Minä'}
    />
    <Menu.Item
      as={Link}
      to={en ? '/skills/en' : '/skills/fi'}
      content={en ? 'Skills' : 'Taidot'}
    />
    <Menu.Item
      as={Link}
      to={en ? '/experience/en' : '/experience/fi'}
      content={en ? 'Experience' : 'Kokemus'}
    />
    <Menu.Item
      position='right'
      content={<Flag name={en ? 'fi' : 'gb'} />}
      onClick={change}
    />
  </Menu>
)

export default AddMenu
