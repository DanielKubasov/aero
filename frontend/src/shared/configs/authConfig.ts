import NextAuth, {User} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'johndoe@email.com',
                },
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials, req) {
                try {

                    const res = await fetch('http://localhost:4000/auth/sign-in', {
                        method: 'POST',
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                        headers: {'Content-Type': 'application/json'},
                    });

                    if (!res.ok) return null;

                    const parsedResponse = await res.json();

                    const jwt = parsedResponse.access_token;

                    return {
                        ...credentials,
                        jwt,
                    };
                } catch (e) {
                    return null;
                }
            },
        })
    ],
    callbacks: {
        jwt: async ({token, user}) => {
            // user is only available the first time a user signs in authorized
            if (user) {
                return {
                    ...token,
                    jwt: user.jwt,
                };
            }
            return token;
        },
        session: async ({session, token}) => {
            if (token) {
                session.jwt = token.jwt;
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/sign-in',
        signOut: '/auth/sign-out',
        error: '/auth/error'
    }
};

export default NextAuth(authOptions);
