import { ok } from '../../helpers/http.js'

export class GetParentsByUserController {
    constructor(GetParentsByUserUseCase) {
        this.getParentsByUserUseCase = GetParentsByUserUseCase
    }
    async execute(httpRequest) {
        const user = httpRequest.body.user
        console.log(user)

        const result = await this.getParentsByUserUseCase.execute(user)

        return ok(result)
    }
}
