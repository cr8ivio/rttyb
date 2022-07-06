import React from 'react'

import { TestComponentProps } from './TestComponent.types'

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div data-testid="test-component" className="w-[360px] border border-black bg-white p-4 text-center">
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
)

export default TestComponent
