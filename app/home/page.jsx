import React from 'react'
import MovieVideo from '../components/MovieVideo'
import RecentlyAdded from '../components/RecentlyAdded'

const HomePage = () => {
  return (
    <div>
      <MovieVideo />

      <h1 className='text-3xl font-bold'>Recently Added</h1>
      <RecentlyAdded />
    </div>
  )
}

export default HomePage