import Navbar from './components/Navbar'
import ScoreStats from './components/ScoreStats'
import AddInternForm from './components/AddInternForm'
import InternSearch from './components/InternSearch'
import InternListWithCallback from './components/InternListWithCallback'

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: '16px' }}>
        <ScoreStats />

        <AddInternForm />

        <InternSearch />

        <InternListWithCallback />
      </div>
    </div>
  )
}

/*
Application Layers

Contexts:
- Store shared application state such as theme and intern data.

Custom Hooks:
- Encapsulate reusable logic like counters, forms, and searching.

Components:
- Handle only the UI and user interactions.
- They consume contexts and hooks without containing complex business logic.
*/

export default App