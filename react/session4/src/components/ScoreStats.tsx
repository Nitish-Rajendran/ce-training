import { useMemo } from 'react'
import { useInterns } from '../contexts/intern-context'

function ScoreStats() {
  const { interns } = useInterns()

  const stats = useMemo(() => {
    console.log('Recalculating stats...')

    const scores = interns.map(i => i.score)

    return {
      highest: scores.length > 0 ? Math.max(...scores) : 0,
      lowest: scores.length > 0 ? Math.min(...scores) : 0,
      average:
        scores.length > 0
          ? Math.round(
              scores.reduce((total, score) => total + score, 0) /
                scores.length
            )
          : 0,
      passing: interns.filter(i => i.score >= 50).length,
    }
  }, [interns])

  return (
    <div
      style={{
        padding: '12px',
        background: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '6px',
        marginBottom: '20px',
      }}
    >
      <h2>Score Statistics</h2>

      <p>
        <strong>Highest:</strong> {stats.highest}
      </p>

      <p>
        <strong>Lowest:</strong> {stats.lowest}
      </p>

      <p>
        <strong>Average:</strong> {stats.average}
      </p>

      <p>
        <strong>Passing:</strong> {stats.passing} of {interns.length}
      </p>
    </div>
  )
}

/*
Without useMemo, the statistics would be recalculated on every
component render, even if the interns data has not changed.
useMemo recalculates the values only when the interns array changes,
improving performance for expensive calculations.
*/

export default ScoreStats