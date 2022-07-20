export default class GetProductUseCase {
  private repository

  constructor({ repository }) {
    this.repository = repository
  }

  async execute() {
    const response = await this.repository.getProducts()
    return response
  }
}
