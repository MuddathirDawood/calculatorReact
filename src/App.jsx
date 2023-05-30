import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'

function App() {
  return (
    <div className={"container max-w-sm mx-auto"}>
      <div className={'w-full rounded-lg bg-gray-300 shadow-2xl p-2 my-10'}>
       <Display />
        <div className={'grid grid-cols-4 gap-2'}>
          <Button buttonLabel={"/"} color={"bg-blue-700"} />
          <Button buttonLabel={"X"} color={"bg-blue-700"} />
          <Button buttonLabel={"-"} color={"bg-blue-700"} />
          <Button buttonLabel={"%"} color={"bg-blue-700"} />
          <Button buttonLabel={"7"} />
          <Button buttonLabel={"8"} />
          <Button buttonLabel={"9"} />
          <Button buttonLabel={"+"} span={"row-span-2"} color={"bg-blue-700"}/>
          <Button buttonLabel={"4"} />
          <Button buttonLabel={"5"} />
          <Button buttonLabel={"6"} />
          <Button buttonLabel={"1"} />
          <Button buttonLabel={"2"} />
          <Button buttonLabel={"3"} />
          <Button buttonLabel={"="} span={"row-span-2"} color={"bg-amber-700"}/>
          <Button buttonLabel={"0"} span={"col-span-2"}/>
          <Button buttonLabel={"."} color={"bg-blue-700"} />
        </div>
      </div>
    </div>
  )
}

export default App
