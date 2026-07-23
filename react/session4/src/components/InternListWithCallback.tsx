import { useCallback } from 'react'
import { useInterns } from '../contexts/intern-context'
import { useTheme } from '../contexts/theme-context'


interface InternRowProps {
  id: number
  name: string
  score: number
  onRemove: (id: number) => void
}

function InternRow({ id, name, score, onRemove }: InternRowProps) {
  const { theme } = useTheme()

  console.log(`InternRow rendered: ${name}`)

  return (
    <div
      style={{
        background: theme === 'light' ? '#ffffff' : '#2a2a2a',
        color: theme === 'light' ? '#000000' : '#eeeeee',
        padding: '10px',
        margin: '8px 0',
        borderRadius: '6px',
        border: `1px solid ${theme === 'light' ? '#ddd' : '#444'}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>
        {name} — Score: {score}
      </span>

      <button onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  )
}

function InternListWithCallback() {
  const { interns, removeIntern, isLoading } = useInterns()

  const handleRemove = useCallback((id: number): void => {
    removeIntern(id)
  }, [removeIntern])

  if (isLoading) {
    return <p>Loading interns...</p>
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Intern List</h2>

      {interns.length === 0 ? (
        <p>No interns available.</p>
      ) : (
        interns.map(intern => (
          <InternRow
            key={intern.id}
            id={intern.id}
            name={intern.name}
            score={intern.score}
            onRemove={handleRemove}
          />
        ))
      )}
    </div>
  )
}

/*
useCallback memoizes a function so that the same function reference
is reused between renders unless its dependencies change.
This helps prevent unnecessary re-renders of child components
that receive the function as a prop.
*/

export default InternListWithCallback