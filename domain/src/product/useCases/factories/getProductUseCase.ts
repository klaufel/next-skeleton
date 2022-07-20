import GetProductUseCase from '../getProductUseCase'
import { httpProductRepository } from '../../repository/factory'

const config = { apiBaseUrl: '/', apiProductUrl: 'product' }

export default function getProductUseCase() {
  return new GetProductUseCase({
    repository: httpProductRepository({ config }),
  })
}
