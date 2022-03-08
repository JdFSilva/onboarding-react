import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import { DetailsInterfaces } from '../../types'

import './PopularList.css'

interface PopularListProps {
  popularList: DetailsInterfaces.IMovie[]
}

export default function PopularList({ popularList }: PopularListProps) {
  const listItems = popularList.map((item) => (
    <ListItem key={item.id}>
      <ListItemText primary={item.title} />
    </ListItem>
  ))
  return (
    <List className="popular-list" sx={{ bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Popular Movies" />
      </ListItem>
      <Divider />
      {listItems}
    </List>
  )
}
