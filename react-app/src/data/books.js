export { techBooks } from './stemBooks'
export { nonTechBooks } from './othersBooks'

import { techBooks } from './stemBooks'
import { nonTechBooks } from './othersBooks'

export const books = [...techBooks, ...nonTechBooks]
