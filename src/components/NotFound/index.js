// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="NotFound-container">
    <Header />
    <div className="NotFound-content-container">
      <div className="NotFound-responsive-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
          alt="not found"
        />
        <h1>Lost Your Way?</h1>
        <p>
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
