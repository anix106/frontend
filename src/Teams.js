import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Teams = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://api-basketball.p.rapidapi.com/teams',
          params: { search: 'boston' },
          headers: {
            'X-RapidAPI-Key':
              'd8edd94051mshad24d49be430a8dp1f7283jsna46987ddddf9',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
          }
        }

        const response = await axios.request(options)
        setTeams(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTeams()
  }, [])

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <img
              src={team.logo}
              alt="NBA team logo"
              aria-label="NBA team logo"
            />
            <p>{team.name}</p>
            <p>{team.statistics}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Teams
