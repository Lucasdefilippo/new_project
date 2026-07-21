import { CreateParentsRepository } from "../../repositories/postgres/Parents/PostgresCreateParentsRepository.js";

export class CreateParentsUseCase {
  constructor() {
    // TO DO: Make dependence injection.
  }
  async execute(createParentsParams) {
    const repositories = new CreateParentsRepository();

    const result = await repositories.execute(createParentsParams);

    return result;
  }
}
