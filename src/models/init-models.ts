import type { Sequelize } from "sequelize";
import { plants as _plants } from "./plants";
import type { plantsAttributes, plantsCreationAttributes } from "./plants";

export {
  _plants as plants,
};

export type {
  plantsAttributes,
  plantsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const plants = _plants.initModel(sequelize);


  return {
    plants: plants,
  };
}
