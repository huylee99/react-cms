import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import ButtonDelete from '@/components/ButtonDelete';

function Kanban() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <ButtonDelete 
          resource="KANBAN"
          component={<Button variant="contained">DELETE Kanban</Button>}
        />
        <Button variant="contained">Add Kanban</Button>
      </Stack>
    </div>
  )
}

export default Kanban