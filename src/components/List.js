import React from 'react';
import './List.css';

export default function List(props) {
  const people = props.people.map((person, i) => (
    <ul key={i}>
      <li>Name: {person.name}</li>
      <li>Homeworld: {person.homeworld}</li>
    </ul>
  ))

  return (
    <div>
      {people}
    </div>
  )
}