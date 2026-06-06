export { techBooks } from './techBooks'
export { nonTechBooks } from './nonTechBooks'

import { techBooks } from './techBooks'
import { nonTechBooks } from './nonTechBooks'

export const books = [...techBooks, ...nonTechBooks]
