export class GetParentsByUserUseCase {
    constructor(GetParentsByUserRepository) {
        this.getParentsByUserRepository = GetParentsByUserRepository
    }
    async execute(user) {
        if (!user) {
            console.log('Errado!')
        }

        const result = await this.getParentsByUserRepository.execute(user)

        return result
    }
}
