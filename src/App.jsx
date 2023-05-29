import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'

function App() {
  return (
    <div className={"container max-w-sm mx-auto"}>
      <div className={'w-full rounded-lg bg-gray-300 shadow-2xl p-2 my-10'}>
       <Display />
        <div className={'grid grid-cols-4 gap-2'}>
          <Button buttonLabel={"/"} />
          <Button buttonLabel={"X"} />
          <Button buttonLabel={"-"} />
          <Button buttonLabel={"%"} />

        </div>
      </div>
    </div>
  )
}

export default App
