import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query.js'
import { Routes } from './Routes.js'

export default function App(){
  return(
    <QueryClientProvider client={queryClient}>
      <Routes/>
    </QueryClientProvider>
  )
}