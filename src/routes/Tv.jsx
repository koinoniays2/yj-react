import React from 'react'
import TopBar from '../components/TopBar'

export default function Tv() {
  return (
    <TopBar url="https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=" name="tv"/>
  )
}
