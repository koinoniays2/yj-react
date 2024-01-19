import React from 'react'
import Layout from '../components/Layout'
import { Button, TextField } from '@mui/material'

export default function Mui() {
  return (
    <Layout>
        <div className="w-full flex justify-center py-16">
            <div className="w-[1200px]">
                <h1>mui test</h1>
                <Button variant="contained">contained</Button>
                <TextField id="outlined-basic" label="이름" variant="outlined" />
            </div>
        </div>
    </Layout>
  )
}
