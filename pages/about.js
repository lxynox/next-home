import ThemeProvider, {Colors, ThemeSelect} from '../components/themes'

const About = () => 
  <ThemeProvider>
    <>
      <Colors>
      {({blue}) =>
        <span style={{color: blue}}>Some blue texts</span>
      }
      </Colors>
      <ThemeSelect />
    </>
    <hr/>
    About
  </ThemeProvider>

export default About
