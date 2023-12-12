import ListGroup from "./components/ListGroup"

function App(){

  let items = ["Zelda", "Metroid", "Kirby", "Castlevania"];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return <div><ListGroup items={items} heading='Games' onSelectItem={handleSelectItem}></ListGroup></div>

}

export default App