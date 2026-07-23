interface User {
  name: string
  isAdmin: boolean
}

// Grandchild component — actually uses the user object
function UserBadge({ user }: { user: User }) {
  return (
    <div>
      <p>Logged in as: {user.name}</p>
      {user.isAdmin && <span style={{ color: 'green' }}>Admin</span>}
    </div>
  )
}

// This component receives the user only to pass it to UserBadge.
// This is called prop drilling. If the User interface changes,
// this component must also change even though it doesn't use the data.
function InternCard({ user }: { user: User }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '12px',
        margin: '10px 0',
        borderRadius: '6px',
      }}
    >
      <p>Intern Card Content</p>
      <UserBadge user={user} />
    </div>
  )
}

// This component also forwards the user without using it.
// Prop drilling makes intermediate components harder to maintain.
function InternList({ user }: { user: User }) {
  return (
    <div>
      <InternCard user={user} />
      <InternCard user={user} />
    </div>
  )
}

function PropDrillingDemo() {
  const user: User = {
    name: 'Rahul',
    isAdmin: true,
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Prop Drilling Demo</h2>
      <InternList user={user} />
    </div>
  )
}

export default PropDrillingDemo