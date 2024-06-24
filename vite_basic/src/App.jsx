import Button from "./Btn.jsx"

function App() {
  const user = 'learning react with vikrant'
  return (
    <>
      <h1>vite react</h1>
      <h3>welcom to my app  </h3>
      {user} {/* evaluated expression i cant  use loop or condtional statement inside it  s
      bec under the hood it will convert in dom object and in object we cant use if or loop as props */}
      <br />
      <Button />
    </>
  )
}

export default App
