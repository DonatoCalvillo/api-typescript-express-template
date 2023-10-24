import { v4 as uuidv4 } from 'uuid'

import { type Uuid } from '../domain/uuid'

export class UuidV4 implements Uuid {
  generateShort (): string {
    const requestId = uuidv4()
    const shortUUID = requestId.substring(0, 8)
    return shortUUID
  }
}
