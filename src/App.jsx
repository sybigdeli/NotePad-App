import "./App.css";
import NavBar from "./components/NavBar/index.jsx";
import Note from "./components/Note/index.jsx";
import NoteList from "./components/NoteList/index.jsx";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <NoteList></NoteList>
      <Note></Note>
    </>
  );
}


export default App;
