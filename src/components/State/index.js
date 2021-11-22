import {Link} from 'react-router-dom'
import './index.css'

const State = props => {
  const {stateList} = props
  const {
    stateCode,
    stateName,
    listOfConfirmed,
    listOfRecovered,
    listOfOther,
    listOfDeceased,
    listOfPopulation,
  } = stateList
  const active =
    listOfConfirmed - listOfRecovered - listOfDeceased - listOfOther

  return (
    <li className="state">
      <Link to={`/state/${stateCode}`} className="link">
        <p className="name">{stateName}</p>
      </Link>
      <p className="confirmed">{listOfConfirmed}</p>
      <p className="active">{active}</p>
      <p className="recovered">{listOfRecovered}</p>
      <p className="deceased">{listOfDeceased}</p>
      <p className="population">{listOfPopulation}</p>
    </li>
  )
}

export default State
