import { created } from '../../helpers/http.js'

export class CreateParentsController {
    constructor(CreateParentsUseCase) {
        this.createParentsUseCase = CreateParentsUseCase
    }

    async execute(httpRequest) {
        const createParentsParams = httpRequest.body

        const result =
            await this.createParentsUseCase.execute(createParentsParams)

        return created(result)
    }
}
