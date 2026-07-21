import { CreateParentsUseCase } from "../../use-cases/Parents/create-parents.js";

export class CreateParentsController {
  constructor() {
    // TO DO: Make dependence injection.
  }

  async execute(httpRequest) {
    const createParentsParams = httpRequest.body;

    const createdParent = new CreateParentsUseCase();

    const result = await createdParent.execute(createParentsParams);

    return { statusCode: 201, result };
  }
}
