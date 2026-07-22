import { created } from "../../helpers/http.js";
import { CreateParentsUseCase } from "../../use-cases/Parents/create-parents.js";

export class CreateParentsController {
  constructor() {
    // TO DO: Make dependence injection.
  }

  async execute(httpRequest) {
    const createParentsParams = httpRequest.body;

    const createdParent = new CreateParentsUseCase();

    const result = await createdParent.execute(createParentsParams);

    return created(result);
  }
}
