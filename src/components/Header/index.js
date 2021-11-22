import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {isMenuHeader: false}

  mobileMenuClick = () => {
    this.setState(prevState => ({isMenuHeader: !prevState.isMenuHeader}))
  }

  mobileMenu = () => (
    <>
      <ul className="sa">
        <Link to="/">
          <li className="paragraph">Home</li>
        </Link>

        <Link to="/about">
          <li className="paragraph">About</li>
        </Link>
      </ul>
    </>
  )

  render() {
    const {isMenuHeader} = this.state
    return (
      <>
        <nav>
          <Link to="/">
            <h1 className="co">CO19INDIA</h1>
          </Link>
          <ul className="menu">
            <Link to="/">
              <li className="paragraph">Home</li>
            </Link>

            <Link to="/about">
              <li className="paragraph">About</li>
            </Link>
          </ul>
        </nav>
        <div>
          <nav className="list">
            <Link to="/">
              <h1 className="co"> CO19INDIA</h1>
            </Link>
            <button
              type="button"
              className="mobile"
              onClick={this.mobileMenuClick}
            >
              <img
                src="https://res.cloudinary.com/charani/image/upload/v1636961155/add-to-queue_1_jbzrnv.png"
                alt="menu"
              />
            </button>
          </nav>
          <div className="mobile">{isMenuHeader ? this.mobileMenu() : ''}</div>
        </div>
      </>
    )
  }
}

export default Header
