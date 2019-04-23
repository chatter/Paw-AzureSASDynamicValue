declare function registerDynamicValueClass(a: any): void

interface DynamicValueInterface {
  evaluate(context: any): string
  text(context: any): string
  title(context: any): string
}

type DynamicValue = (new () => DynamicValueInterface) & {
  help: string
  identifier: string
  inputs: Array<InputField<InputFieldType, InputFieldType['type']>>
  title: string
}

/**
 * Defines the options available to pass for a SecureValueInputField.
 */
interface SecureValueInputFieldOptions {
  persisted?: boolean
  placeholder?: string
}

/**
 * Defines the options available to pass for a StringInputField.
 */
interface StringInputFieldOptions {
  /**
   * Default value of the field (when there is no previous persisted value).
   */
  defaultValue?: string
  /**
   * Whether the last value introduced by the user will be remembered
   * (persisted in user defaults). Useful for Importers and Exporters.
   */
  persisted?: boolean
  /**
   * Placeholder string for the field (if there is no default value neither
   * previous persisted value).
   */
  placeholder?: string
}

/**
 * Allows the input of sensitive data.
 */
interface SecureValueInputFieldType {
  type: 'SecureValue'
  options: SecureValueInputFieldOptions
}

/**
 * Allows the input of text data.
 */
interface StringInputFieldType {
  type: 'String'
  options: StringInputFieldOptions
}

/**
 * Union of available InputField types.
 */
type InputFieldType = SecureValueInputFieldType | StringInputFieldType

/**
 * Creates an input for your extension that allows users of the extension to
 * enter values that will be available during `extension()` (for Dynamic
 * Values), `import()` (for Importers) / `generate()` (for Exporters/Code
 * Generators) call.
 */
declare class InputField<
  T extends InputFieldType,
  U extends InputFieldType['type']
> {
  constructor(
    key: string,
    name: string,
    type: U,
    options?: Extract<T, { type: U }>['options']
  )
}
