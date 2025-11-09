import { DataTypes, Model } from "sequelize";

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