import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { ToDoForm } from './components/ToDoForm';
import { Task } from './components/Task';

function App() {

  return (
    <div>
      <Header />
        <main>
          <ToDoForm />
        </main>  
    </div>

  )
}

export default App
