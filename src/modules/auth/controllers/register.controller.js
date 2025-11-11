import { UniqueConstraintError, ValidationError } from "sequelize";
import { User } from "../../../database/sequelize/db.index.js";
import { responseJSON } from "../../../handlers/response.json.js";

/**
 * @param { Request } req Objeto de requisição express.
 * @param { Response } res Objeto de resposta express.
 */
export async function userRegister(req, res) {
    try {
        const createUser = await User.create(req.body);

        return responseJSON(res, 201, {
            error: false,
            message: `Usuário: ${createUser.username} criado com sucesso!`,
        });

    } catch (error) {
        if (error instanceof ValidationError) {
            const statusCode = error instanceof UniqueConstraintError ? 409 : 400;
            const field = error?.errors[0]?.path;

            return responseJSON(res, statusCode, {
                error: true,
                message: error?.errors[0]?.message,
                data: { field },
            });
        }

        // Erros inesperados:
        console.error(error);
        return responseJSON(res, 500, {
            error: true,
            message: "Ooops! Aconteceu um erro inesperado.",
        });
    }
}