import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="container">
      <img
        src="https://res.cloudinary.com/charani/image/upload/v1636866520/Group_7484_tmtqvj.png"
        alt="not-found-pic"
      />
      <h1 className="heading">PAGE NOT FOUND</h1>
      <p className="paragraph">
        we are sorry, the page you requested could not be found
      </p>
      <div>
        <Link to="/">
          <button type="button" className="button">
            Home
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default NotFound
