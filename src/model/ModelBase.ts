import crypto from 'crypto'

export class ModelBase {
  id: string
  constructor() {
    // 每个聊天会话的 ID
    this.id = crypto.randomUUID()
  }
}