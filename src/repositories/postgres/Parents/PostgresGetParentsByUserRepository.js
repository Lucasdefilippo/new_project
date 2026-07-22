import { prisma } from '../../../../prisma/prisma.js'

export class GetParentsByUserRepository {
    async execute(user) {
        return await prisma.parents.findFirst({
            where: {
                user: user,
            },
        })
    }
}
