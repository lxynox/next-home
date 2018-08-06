import ProgressiveImage from 'react-progressive-bg-image'

import bg from '../assets/img/bg.png'
import bgx100 from '../assets/img/bgx100.png'

class NavImage extends React.Component {
  state = {shouldRender: false}
  componentDidMount() {this.setState({shouldRender: true})}
  render() {
    if (!this.state.shouldRender) return null;
    return (
      <ProgressiveImage
        src={bg}
        placeholder={bgx100}
        style={{
          height: 300,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />
    )
  }
}

export default NavImage
