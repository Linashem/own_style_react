import React from 'react'
import { CoursItem } from '../Components/coursItem/CoursItem'
import { useParams } from 'react-router-dom'

export const OneCoursePage = () => {
  const {cardId}= useParams()
  return (
    <div> <CoursItem  /> </div>
  )
}
