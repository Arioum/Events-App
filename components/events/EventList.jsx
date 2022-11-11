import React from 'react'
import EventItem from './EventItem';

const EventList = ({ items }) => {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {items.map(event => {
          <li></li>
        })}
      </ul>
    </div>
  )
}

export default EventList