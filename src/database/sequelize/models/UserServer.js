import { DataTypes, Model } from "sequelize";

export class UserServer extends Model {

    static initModel(sequelize) {

        UserServer.init({
            // Colunas:
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            server_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

        }, {
            // Configurações:
            sequelize,

            modelName: "UserServer",
            tableName: "user_servers",
            underscored: true,
            timestamps: true,
            paranoid: true,

        });

    }

}