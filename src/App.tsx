import './App.css';
import { aTestGen, dnaGenerator } from './core/generator/DnaGen';
import { Container, Heading, HeadingWithContent, List, TextWithNumber, MyHeaderClass } from './core/react_component/Welcome';

const gen = dnaGenerator(aTestGen)

function App() {
  return (
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
        <MyHeaderClass title="Titre"/>
    </div>
  );
}

export default App;
