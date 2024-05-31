import React, {Component} from 'react'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>__communityT("404")</h1>
        <h3>__communityT("Page not found")</h3>
        <h2>__communityT("NewLabel")</h2>
        <h2>
          <CommunityTrans>
              Hello <strong>{{name}}</strong>, how are you? <b>Happy</b> to be your testcase.
          </CommunityTrans>
        </h2>
      </div>
    )
  }
}

export default NotFound
