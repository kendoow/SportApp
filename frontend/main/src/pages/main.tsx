import React from 'react'

import Dropdown from '@shared/ui/DropDown/DropDown' // Импортируйте стили как модуль

const App: React.FC = () => {
  const options = ['Option 1', 'Option 2', 'Option 3']

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`)
    // Здесь вы можете выполнить дополнительные действия при выборе опции
  }

  return (
    <div>
      <h1>React Dropdown Example</h1>
      <Dropdown title='main pages'>
        {options.map((option) => (
          <div key={option} onClick={() => handleSelect(option)}>
            {option}
          </div>
        ))}
      </Dropdown>
    </div>
  )
}

export default App
