import { useInterns } from '../contexts/intern-context'
import useInternSearch from '../hooks/useInternSearch'

function InternSearch() {
  const { interns, isLoading } = useInterns()

  const {
    search,
    setSearch,
    filtered,
    stats,
  } = useInternSearch(interns)

  if (isLoading) {
    return <p>Loading interns...</p>
  }

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        marginBottom: '20px',
        borderRadius: '6px',
      }}
    >
      <h2>Search Interns</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          padding: '8px',
          width: '250px',
          marginBottom: '16px',
        }}
      />

      <div style={{ marginBottom: '16px' }}>
        <p><strong>Total Interns:</strong> {stats.total}</p>
        <p><strong>Present:</strong> {stats.present}</p>
        <p><strong>Average Score:</strong> {stats.avg}</p>
      </div>

      <h3>Filtered Interns</h3>

      {filtered.length === 0 ? (
        <p>No interns found.</p>
      ) : (
        <ul>
          {filtered.map(intern => (
            <li key={intern.id}>
              <strong>{intern.name}</strong> | {intern.role} | Score:{' '}
              {intern.score} |{' '}
              {intern.isPresent ? 'Present' : 'Absent'}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default InternSearch