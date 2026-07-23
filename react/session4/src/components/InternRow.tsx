interface InternRowProps {
  id: number
  name: string
  score: number
  onRemove: (id: number) => void
}

function InternRow({
  id,
  name,
  score,
  onRemove,
}: InternRowProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>

      <td>
        <button onClick={() => onRemove(id)}>
          Remove
        </button>
      </td>
    </tr>
  )
}

export default InternRow