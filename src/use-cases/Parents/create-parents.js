import { CreateParentsRepository } from '../../repositories/postgres/Parents/PostgresCreateParentsRepository.js'

export class CreateParentsUseCase {
    constructor(CreateParentsRepository) {
        this.createParentsRepository = CreateParentsRepository
    }
    async execute(createParentsParams) {
        const result =
            await this.createParentsRepository.execute(createParentsParams)

        return result
    }
}
