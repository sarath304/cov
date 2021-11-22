import {VscGithubAlt} from 'react-icons/vsc'
import {FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import './index.css'

export default function Footer() {
  return (
    <div className="container">
      <h1 className="logo">COVID19INDIA</h1>

      <p className="paragraph">
        we stand with everyone fighting on the front lines
      </p>
      <div className="social">
        <VscGithubAlt className="logo" />
        <FiInstagram className="logo" />
        <FaTwitter className="logo" />
      </div>
    </div>
  )
}
