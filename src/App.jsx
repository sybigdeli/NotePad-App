import "./App.css";
import NavBar from "./components/NavBar/index.jsx";
import Note from "./components/Note/index.jsx";
import NoteList from "./components/NoteList/index.jsx";
import Alert from "./components/UI/BoxAlert";
function App() {
  return (
    <>
      <Alert></Alert>
      <NavBar></NavBar>
      <NoteList></NoteList>
      <Note></Note>
    </>
  );
}


export default App;
