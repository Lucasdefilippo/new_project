import { CreateParentsController } from '../../controllers/Parents/create-parents.js'
import { GetParentsByUserController } from '../../controllers/Parents/get-parents-by-user.js'
import { CreateParentsRepository } from '../../repositories/postgres/Parents/PostgresCreateParentsRepository.js'
import { GetParentsByUserRepository } from '../../repositories/postgres/Parents/PostgresGetParentsByUserRepository.js'
import { CreateParentsUseCase } from '../../use-cases/Parents/create-parents.js'
import { GetParentsByUserUseCase } from '../../use-cases/Parents/get-parents-by-user.js'

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

export const makeGetParentsByUserController = () => {
    const getParentsByUserRepository = new GetParentsByUserRepository()
    const getParentsByUserUseCase = new GetParentsByUserUseCase(
        getParentsByUserRepository,
    )
    const getParentsByUserController = new GetParentsByUserController(
        getParentsByUserUseCase,
    )

    return getParentsByUserController
}
