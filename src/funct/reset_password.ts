import bcrypt from 'bcrypt';

export const hashResetToken = async ({token}: { token: string }): Promise<string> => {
    return await bcrypt.hash(token, 10);
}

export const compareResetToken = async ({ token, user }: { token: string, user: any }) => {
    return await bcrypt.compare(token, user?.reset_token);
}