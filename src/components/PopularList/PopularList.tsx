import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import { APITypes } from '../../services'

import './PopularList.css'

interface PopularListProps {
  popularList: APITypes.MovieObjectResponse[]
}

export default function PopularList({ popularList }: PopularListProps) {
  const listItems = popularList.map((item) => (
    <ListItem key={item.title}>
      <ListItemText primary={item.title} />
    </ListItem>
  ))
  return (
    <List className="popular-list" sx={{ bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText inset primary="Popular Movies" />
      </ListItem>
      <Divider />
      {listItems}
    </List>
  )
}
