import ThemeProvider, {Colors, ThemeSelect} from '../components/themes'
import Terminal from '../components/terminal'

const About = () => 
  <ThemeProvider>
    <>
      <Colors>
      {({blue}) =>
        <span style={{color: blue}}>Some blue texts</span>
      }
      </Colors>
      <ThemeSelect/>
    </>
    <hr/>
    About
    <Terminal/>
  </ThemeProvider>

export default About
