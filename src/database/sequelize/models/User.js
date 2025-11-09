import { DataTypes, Model } from "sequelize";

/**
 * @example
 * 
 * // Correto:
 * import { User } from "@/db.index.js";
 * 
 * // Incorreto:
 * import { User } from "@/models/User.js";
 */
export class User extends Model {

    static initModel(sequelize) {

        User.init({
            // Colunas:
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM(["user", "moderator", "admin"]),
                defaultValue: "user",
                allowNull: false,
            },
            created_by: {
                type: DataTypes.ENUM(["web-site", "game-client", "admin-panel"]),
                defaultValue: "web-site",
                allowNull: false,
            },
            public_id: {
                defaultValue: DataTypes.UUIDV4,
                type: DataTypes.UUID,
                allowNull: false,
                unique: true,
            },

        }, {
            // Configurações:
            sequelize,

            modelName: "User",
            tableName: "users",
            underscored: true,
            timestamps: true,
            paranoid: true,

        });

    }

}