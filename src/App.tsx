import './App.css';
import { DnaGenerator } from './core/generator/DnaGen';
import { Container, Heading, HeadingWithContent, List, TextWithNumber, MyHeaderClass } from './core/react_component/Welcome';

const testReactComponent = () =>
  <div className="App">
    <Heading title="hello"></Heading>
    <HeadingWithContent><strong>hello</strong></HeadingWithContent>
    <Container>Foo</Container>
    <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
      {(num: number) => <div>Today's number is {num}</div>}
    </TextWithNumber>
    <TextWithNumber>
      {(num: number) => <div>Today's number is {num}</div>}
    </TextWithNumber>
    <List
      items={["Jack", "John"]}
      render={
        (item: string) =>
          <div>{item.toUpperCase()}</div>
      }></List>
    <MyHeaderClass title="Titre" />
  </div>

function App() {
  console.log(DnaGenerator(45))
  console.log(DnaGenerator(10, "Gerald"))
  return (
    <div>
      <h1>(:- Hello World -:)</h1>
      <button className='MyButton' onClick={()=>console.log("button clicked")}>BUTTON</button>
    </div>
  )
}

export default App;
