/**
 * @param { number } getNumber Número a verificar.
 * @param { string } message Mensagem de erro personalizada.
 * @param {{ min: number, max: number }} ranges Range de limites.
 */
export function numberVerify(getNumber, message, ranges) {
    const sendNumber = Number(getNumber);

    if (Number.isNaN(sendNumber)) {
        throw new TypeError("TypeError: ", message);
    }

    if (!(Number.isFinite(sendNumber) && Number.isInteger(sendNumber))) {
        throw new Error("Error: ", message);
    }

    if (sendNumber < ranges.min || sendNumber > ranges.max) {
        throw new RangeError("RangeError: ", message);
    }

    return sendNumber;
}