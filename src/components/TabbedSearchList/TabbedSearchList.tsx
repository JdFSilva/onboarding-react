import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { APITypes } from '../../services'
import { useNavigate } from 'react-router-dom'

import './TabbedSearchList.css'

interface TabPanelProps {
  id: string
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { id, children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={id}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface ISearchResults {
  movies: APITypes.IMovieObjectResponse[]
  shows: APITypes.IShowObjectResponse[]
  people: APITypes.IPeopleObjectResponse[]
}

interface ITabbedSearchListProps {
  searchResults: ISearchResults
}
export default function TabbedSearchList({
  searchResults,
}: ITabbedSearchListProps) {
  const navigate = useNavigate()

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const moviesItems = searchResults.movies.map((item) => (
    <ListItem
      className="list-item"
      key={item.id}
      onClick={() => navigate(`/movies/${item.id}`)}
    >
      <ListItemText primary={item.title} />
    </ListItem>
  ))

  const showsItems = searchResults.shows.map((item) => (
    <ListItem
      className="list-item"
      key={item.id}
      onClick={() => navigate(`/shows/${item.id}`)}
    >
      <ListItemText primary={item.name} />
    </ListItem>
  ))

  const peopleItems = searchResults.people.map((item) => (
    <ListItem
      className="list-item"
      key={item.id}
      onClick={() => navigate(`/people/${item.id}`)}
    >
      <ListItemText primary={item.name} />
    </ListItem>
  ))

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Movies" {...a11yProps(0)} />
          <Tab label="Shows" {...a11yProps(1)} />
          <Tab label="People" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel id="moviesSearchResults" value={value} index={0}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {moviesItems}
        </List>
      </TabPanel>
      <TabPanel id="showsSearchResults" value={value} index={1}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {showsItems}
        </List>
      </TabPanel>
      <TabPanel id="peopleSearchResults" value={value} index={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {peopleItems}
        </List>
      </TabPanel>
    </Box>
  )
}
