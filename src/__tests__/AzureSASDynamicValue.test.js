describe('AzureSASDynamicValue', () => {
  global.InputField = jest.fn()
  global.registerDynamicValueClass = jest.fn()

  const { AzureSASDynamicValue } = require('../AzureSASDynamicValue')

  const context = {
    getCurrentRequest: jest.fn().mockImplementation(() => ({
      url: 'test.com'
    }))
  }

  let extension

  beforeEach(() => {
    extension = new AzureSASDynamicValue()
    extension.keyName = 'test-keyname'
    extension.keyValue = 'test-keyvalue'
  })

  it('should return static title for title()', () => {
    expect(extension.title()).toEqual(AzureSASDynamicValue.title)
  })

  it('should return static title for text()', () => {
    expect(extension.text()).toEqual(AzureSASDynamicValue.title)
  })

  it('should generate a valid sr', () => {
    const token = extension.evaluate(context)
    expect(token).toMatch(new RegExp(context.getCurrentRequest().url))
  })

  it('should generate a valid se', () => {
    const token = extension.evaluate(context)
    const now = Math.floor(Date.now() / 1000) + 86400
    expect(token).toMatch(new RegExp(`&se=${now}&skn`))
  })

  it('should generate a valid skn', () => {
    extension.keyName = 'test-keyname'
    const token = extension.evaluate(context)
    expect(token).toMatch(new RegExp(extension.keyName))
  })

  it('should generate valid format', () => {
    const token = extension.evaluate(context)
    const x = /^SharedAccessSignature sr=[^&]+&sig=[^&]+&se=[^&]+&skn=[^&]+$/
    expect(token).toMatch(x)
  })
})
