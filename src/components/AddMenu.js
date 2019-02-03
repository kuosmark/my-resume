import React from 'react'
import { Menu } from 'semantic-ui-react'
import MenuData from './MenuData'
import AddMenuItems from './AddMenuItems'

const AddMenu = ({ en, change }) => (
  <Menu size='massive' inverted stackable widths={4}>
    <AddMenuItems data={en ? MenuData.en : MenuData.fi} change={change} />
  </Menu>
)

export default AddMenu
