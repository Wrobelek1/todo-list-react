import Form from './Form'
import Tasks from './Tasks'

const tasks = [
  {id: 1, content: "przejsc na reacta", done: false},
  {id: 2, content: "zjesc obiad", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
      <main className="container">
    <header><h1>Lista zadań</h1></header>
    <section className="section">
        <h2 className="section__header">Dodaj zadanie</h2>
        <div className="section__body">
        <Form />
        </div>
    </section>
    <section className="section">
        <h2 className="section__header">Lista zadań</h2>
        <div className="section__body">
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}  />
        </div>    
    </section>
</main>
  );
}

export default App;
