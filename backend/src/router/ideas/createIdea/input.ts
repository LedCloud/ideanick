import { zNickRequired, zStringMin, zStringRequired } from '@ideanick/shared/src/zod'
import { z } from 'zod'

export const zCreateIdeaTrpcInput = z.object({
  name: zStringRequired,
  nick: zNickRequired,
  description: zStringRequired,
  text: zStringMin(100),
})