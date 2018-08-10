import ThemeProvider, {Colors, ThemeToggler} from '../components/themes'

const About = () => 
  <ThemeProvider>
    <ThemeToggler/>
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
