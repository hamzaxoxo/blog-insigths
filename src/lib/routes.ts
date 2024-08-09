
export const LOGIN = '/auth/login';
export const ROOT = '/';

export const PUBLIC_ROUTES = [
    '/auth/login',
    '/auth/signup',
    '/blogs',
    '/api/auth/callback/google',
    '/api/auth/callback/facebook',
    '/contact-us',
    '/about-us',
    ''
]

export const PROTECTED_SUB_ROUTES = [
    '/edit',
]