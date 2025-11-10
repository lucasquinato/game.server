/**
 * @param { Response } res Objeto de resposta express.
 * @param { number } status Status code da resposta.
 * @param {{ error: boolean, message: string, data: { token?: string, field?: string } }} options Retorno de dados.
 */
export function responseJSON(res, status, options) {
    const { error, message, data } = options;

    return res.status(status).json({ error, message, data });
}