import React from 'react'

function RoleRoute({ children, requireRole = [] }) {
  const role = window.localStorage.getItem('role');

  React.useEffect(() => {
    const checkRole = requireRole.includes(role);

    if(!checkRole) {
      window.localStorage.removeItem('role');
      window.location.href = '/403'
    }
  }, [role])


  return <>{children}</>
}

export default RoleRoute