import { Route, Routes } from 'react-router-dom'
import { Home, Search, Movie, Show, Person } from '../pages'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />
    <Route path="/movies/:id" element={<Movie />} />
    <Route path="/shows/:id" element={<Show />} />
    <Route path="/people/:id" element={<Person />} />
  </Routes>
)

export default AppRoutes
