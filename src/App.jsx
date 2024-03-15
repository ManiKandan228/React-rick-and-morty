import React from 'react'
import CharacterComponent from './Components/CharacterComponents/CharacterComponent'
import { QueryClient, QueryClientProvider } from 'react-query'

const App = () => {
  const queryClient = new QueryClient()
  return (
   <div className='App'>
    <div className='container'>
      <QueryClientProvider client={queryClient}>
        <CharacterComponent/>
      </QueryClientProvider>
    </div>
   </div>
  )
}

export default App