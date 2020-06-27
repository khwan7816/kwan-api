import { paramMissingError } from '@shared/constants'

test('1 + 2 = 3', () => {
  expect(paramMissingError).toBe('One or more of the required parameters was missing.')
})
