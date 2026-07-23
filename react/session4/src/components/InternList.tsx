import InternRow from './InternRow'

interface Intern {
  id: number
  name: string
  score: number
  role: string
  isPresent: boolean
}

interface Props {
  interns: Intern[]
  onRemove: (id: number) => void
}

function InternList({
  interns,
  onRemove,
}: Props) {
  return (
    <table>
      <tbody>
        {interns.map((intern) => (
          <InternRow
            key={intern.id}
            id={intern.id}
            name={intern.name}
            score={intern.score}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </table>
  )
}

export default InternList