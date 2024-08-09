import jwt from "jsonwebtoken";

export function verifyJWT(token: string): any | null {
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY!);
        return decoded;
    } catch (error) {
        return null;
    }
}
