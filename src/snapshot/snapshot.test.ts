import { generateGreeting } from './snapshot'
test('snapshot', () => {
  expect(generateGreeting('alice')).toMatchSnapshot()
})

test('snapshot inline', () => {
  expect(generateGreeting('james')).toMatchInlineSnapshot(`
    {
      "message": "Hello, james!",
      "timestamp": null,
      "version": 2,
    }
  `)
})
