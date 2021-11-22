import './index.css'

const AboutList = props => {
  const {answer, question} = props

  return (
    <li>
      <p className="AboutList-paragraph">{question}</p>
      <p className="AboutList-blue">{answer}</p>
    </li>
  )
}

export default AboutList
