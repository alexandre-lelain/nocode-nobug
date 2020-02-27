import React from 'react'
import { Typography } from '@material-ui/core'

import { ResetLink } from 'styles'

export default () => {
  return (
    <header>
      <Typography color="textPrimary" variant="h3" component="h2">
        <ResetLink to="/">No Code, No Bug</ResetLink>
      </Typography>
    </header>
  )
}
