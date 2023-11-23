import bycrpt from 'bcrypt';

export const hashPassword = async ({password}:{password: string}) => {
    const salt = await bycrpt.genSalt(10);
    return await bycrpt.hash(password, salt);
}

export const comparePassword = async ({password,hashedPassword}:{password: string, hashedPassword: any}) => {
    return await bycrpt.compare(password, hashedPassword);
}