import "./App.css";
import NavBar from "./components/NavBar/index.jsx";
import Note from "./components/Note/index.jsx";
import NoteList from "./components/NoteList/index.jsx";
import { NoteProvider } from "./providers/NoteProvider";
function App() {
  return (
    <NoteProvider>
      <NavBar />
      <NoteList />
      <Note />
    </NoteProvider>
  );
}

export default App;
