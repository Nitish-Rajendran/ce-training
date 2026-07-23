import useCounter from '../hooks/useCounter'

function CounterDemo() {
  const basic = useCounter()

  const bounded = useCounter({
    initial: 5,
    min: 0,
    max: 10,
  })

  const stepped = useCounter({
    step: 5,
  })

  return (
    <div style={{ padding: '16px' }}>
      <h2>Custom Hook Demo</h2>

      <div
        style={{
          border: '1px solid #ccc',
          padding: '12px',
          marginBottom: '16px',
        }}
      >
        <h3>Basic Counter</h3>

        <p>Count: {basic.count}</p>

        <button onClick={basic.increment}>+</button>
        <button onClick={basic.decrement}>-</button>
        <button onClick={basic.reset}>Reset</button>
      </div>

      <div
        style={{
          border: '1px solid #ccc',
          padding: '12px',
          marginBottom: '16px',
        }}
      >
        <h3>Bounded Counter (0 - 10)</h3>

        <p>Count: {bounded.count}</p>

        <button onClick={bounded.increment}>+</button>
        <button onClick={bounded.decrement}>-</button>
        <button onClick={bounded.reset}>Reset</button>
      </div>

      <div
        style={{
          border: '1px solid #ccc',
          padding: '12px',
        }}
      >
        <h3>Step Counter (+5 / -5)</h3>

        <p>Count: {stepped.count}</p>

        <button onClick={stepped.increment}>+5</button>
        <button onClick={stepped.decrement}>-5</button>
        <button onClick={stepped.reset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterDemo