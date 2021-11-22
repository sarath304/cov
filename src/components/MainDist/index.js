import './index.css'

const MainDist = props => {
  const {topDistrictsNumber, topDistrictsName} = props

  return (
    <li className="list">
      <p className="paragraph">{topDistrictsNumber}</p>
      <p className="Name">{topDistrictsName}</p>
    </li>
  )
}

export default MainDist
