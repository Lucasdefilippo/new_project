import { CreateParentsController } from '../../controllers/Parents/create-parents.js'
import { CreateParentsRepository } from '../../repositories/postgres/Parents/PostgresCreateParentsRepository.js'
import { CreateParentsUseCase } from '../../use-cases/Parents/create-parents.js'

export const makeCreateParentsController = () => {
    const createParentsRepository = new CreateParentsRepository()
    const createParentsUseCase = new CreateParentsUseCase(
        createParentsRepository,
    )
    const createParentsController = new CreateParentsController(
        createParentsUseCase,
    )

    return createParentsController
}
