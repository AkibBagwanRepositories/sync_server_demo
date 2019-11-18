import { EntityRepository, Repository } from "typeorm";
import { State } from "src/entities/state.entity";

@EntityRepository(State)
export class StateRepository extends Repository<State> {

}