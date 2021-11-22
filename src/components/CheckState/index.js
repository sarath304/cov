import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const CheckState = props => {
  const {id, stateName, stateCode} = props

  return (
    <li className="state">
      <Link to={`/state/${id}`} className="link">
        <div className="container">
          <p className="heading">{stateName}</p>
          <button type="button" className="button">
            {stateCode}
            <BiChevronRightSquare
              testid="searchResultChevronRightIcon"
              alt="line icon"
              className="logo"
            />
          </button>
        </div>
      </Link>
    </li>
  )
}

export default CheckState
