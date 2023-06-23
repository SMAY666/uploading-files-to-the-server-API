import bcrypt from 'bcrypt';


export abstract class Password {
    private static hashing(password: string) {
        return bcrypt.hashSync(password, process.env.PASSWORD_SALT);
    }

    public static calculateHash(password: string) {
        return this.hashing(password);
    }
}
