import React from 'react'
import Header from '../components/Header/Header'
import Trending from '../components/Trending/Trending'
import BestSelling from '../components/BestSelling/BestSelling'
import Quality from '../components/quality/Quality'

const Home = () => {
  return (
    <div className="">
      <Header />
      <Trending />
      <BestSelling/>
      <Quality/>
    </div>
  )
}

export default Home
