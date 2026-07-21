import { prisma } from "../../../../prisma/prisma.js";

export class CreateParentsRepository {
  async execute(createParentsParams) {
    const result = await prisma.parents.create({
      data: {
        id: createParentsParams.id,
        name: createParentsParams.name,
        lastName: createParentsParams.lastName,
        user: createParentsParams.user,
        password: createParentsParams.password,
        createdAt: createParentsParams.createdAt,
        ...(createParentsParams.role !== undefined && {
          role: createParentsParams.role,
        }),
      },
    });
    return result;
  }
}
