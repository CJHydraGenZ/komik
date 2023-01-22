import React from 'react'
import List from './list'
import ListItem from './listItem'
import Nav from './nav';
import NavItem from './navItem';

export default function Listkomik({ data, loading }) {
  console.log(data);
  return (
    <div className='divide-y divide-slate-100'>
      <Nav>
        <NavItem href="#" isActive>New Releases</NavItem>
        <NavItem href="#">Top Rated</NavItem>
        <NavItem href="#">Vincent’s Picks</NavItem>
      </Nav>
      <List>
        {
          loading ? 'Loading...' :
            data?.komik_list?.map((komik, i) => (

              <ListItem key={i} data={komik} />
            )
            )
        }
      </List>
    </div>
  )
}
