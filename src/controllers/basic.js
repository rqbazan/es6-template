// @ts-check
import BasicModel from '~/models/basic'

export default class BasicController {
  constructor(model = new BasicModel()) {
    this.model = model
  }

  async getText() {
    try {
      const text = await this.model.getText()
      return { text }
    } catch (error) {
      return { error: error.message }
    }
  }
}
