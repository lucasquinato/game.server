import { DataTypes, Model } from "sequelize";

/**
 * @example
 * 
 * // Correto:
 * import { Server } from "@/db.index.js";
 * 
 * // Incorreto:
 * import { Server } from "@/models/Server.js";
 */
export class Server extends Model {

    static initModel(sequelize) {

        Server.init({
            // Colunas:
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

        }, {
            // Configurações:
            sequelize,

            modelName: "Server",
            tableName: "servers",
            underscored: true,
            timestamps: true,
            paranoid: true,

        });

    }

}