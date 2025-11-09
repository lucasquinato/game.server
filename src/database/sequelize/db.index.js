import { sequelize } from "../db.sequelize.js";

import { User } from "./models/User.js";
import { Server } from "./models/Server.js";
import { UserServer } from "./models/UserServer.js";

User.initModel(sequelize);
Server.initModel(sequelize);
UserServer.initModel(sequelize);

User.belongsToMany(Server, { through: UserServer, foreignKey: "user_id" });
Server.belongsToMany(User, { through: UserServer, foreignKey: "server_id" });

export { User, Server };