import ThemeProvider, {Colors} from '../components/themes'

const About = () => 
  <ThemeProvider>
    <div>
      <Colors>
      {({blue}) =>
        <span style={{color: blue}}>Some blue texts</span>
      }
      </Colors>
      About
    </div>
  </ThemeProvider>

export default About
