import "./App.css";
import NavBar from "./components/NavBar/index.jsx";
import Note from "./components/Note/index.jsx";
import NoteList from "./components/NoteList/index.jsx";
// import BoxAlert from "./components/UI/BoxAlert/index.jsx";s
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
