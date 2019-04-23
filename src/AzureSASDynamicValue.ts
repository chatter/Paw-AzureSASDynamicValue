import CryptoJS from 'crypto-js'

/**
 *
 */
export const AzureSASDynamicValue: DynamicValue = class
  implements DynamicValueInterface {
  public static identifier = 'com.chatter.PawExtensions.AzureSASDynamicValue'
  public static title = 'Azure Shared Access Signature'
  public static help = 'https://github.com/chatter/Paw-AzureSASDynamicValue'
  public static inputs = [
    new InputField('keyName', 'Key Name', 'String'),
    new InputField('keyValue', 'Key Value', 'SecureValue')
  ]

  public keyName!: string
  public keyValue!: string

  /**
   * The title to show in the Dynamic Value Tokens.
   *
   * TODO: type context
   */
  public title = (context: any): string => AzureSASDynamicValue.title

  /**
   * The text to show in the Dynamic Value Tokens
   *
   * TODO: type context
   */
  public text = (context: any): string => AzureSASDynamicValue.title

  /**
   * Evaluates the result of the Dynamic Value evaluation.
   *
   * TODO: type context
   */
  public evaluate = (context: any): string => {
    const expiry = Math.floor(Date.now() / 1000 + 86400)
    const encodedUrl = encodeURIComponent(context.getCurrentRequest().url)
    const stringToSign = encodedUrl + '\n' + expiry

    const signature = CryptoJS.HmacSHA256(stringToSign, this.keyValue).toString(
      CryptoJS.enc.Base64
    )

    const encodedSignature = encodeURIComponent(signature)

    return `SharedAccessSignature sr=${encodedUrl}&sig=${encodedSignature}&se=${expiry}&skn=${
      this.keyName
    }`
  }
}

registerDynamicValueClass(AzureSASDynamicValue)
