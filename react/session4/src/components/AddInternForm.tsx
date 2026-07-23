import useInternForm from '../hooks/useInternForm'
import { useInterns } from '../contexts/intern-context'

function AddInternForm() {
  const { form, error, handleChange, handleReset, isValid } = useInternForm()
  const { addIntern, interns } = useInterns()

  function handleSubmit(): void {
    if (!isValid()) return

    addIntern({
      id: interns.length + 1,
      ...form,
    })

    handleReset()
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
      <h2>Add Intern</h2>

      {error && (
        <p style={{ color: 'red', marginBottom: '10px' }}>
          {error}
        </p>
      )}

      <div style={{ marginBottom: '10px' }}>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Intern Name"
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <input
          name="score"
          type="number"
          value={form.score}
          onChange={handleChange}
          placeholder="Score"
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            name="isPresent"
            type="checkbox"
            checked={form.isPresent}
            onChange={handleChange}
          />{' '}
          Present
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>
      </div>

      <button onClick={handleSubmit}>
        Add Intern
      </button>

      <button
        onClick={handleReset}
        style={{ marginLeft: '10px' }}
      >
        Reset
      </button>
    </div>
  )
}

export default AddInternForm