
import jwt from 'jsonwebtoken';

interface UserJwtPayload {
    jti: string
    iat: number
}
export const getJwtSecretKey = () => {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET!;
    if (!secret || secret.length === 0) {
        throw new Error('The environment variable JWT_SECRET_KEY is not set.')
    }
    return secret
}

export const verifyAuth = async (token: string) => {
    try {
        const verified = await jwt.verify(token, getJwtSecretKey())
        return verified as UserJwtPayload
    } catch (error) {
        throw new Error('Your token has expired.')
    }
}