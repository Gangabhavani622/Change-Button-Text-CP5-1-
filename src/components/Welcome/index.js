// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {btnText: 'Subscribe'}

  onChangeText = () => {
    const {btnText} = this.state
    if (btnText === 'Subscribe') {
      this.setState({btnText: 'Subscribed'})
    } else {
      this.setState({btnText: 'Subscribe'})
    }
  }

  render() {
    const {btnText} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="title">Welcome</h1>
          <h1 className="heading">Thank you! Happy Learning</h1>
          <button className="button" type="button" onClick={this.onChangeText}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
