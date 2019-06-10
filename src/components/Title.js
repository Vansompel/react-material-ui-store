import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Title( {name, title} ) {
    return (
        <Typography variant="headline" style={{ paddingTop: 40, textAlign: 'center' }}>
            {name} <strong>{title}</strong>
        </Typography>
    )
}