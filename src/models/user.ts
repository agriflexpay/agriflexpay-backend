import { Sequelize , Model, DataTypes} from "sequelize"

const user=(sequelize: Sequelize) => {
    class User extends Model {
       public id?: string
       public fname?: string
       public lname?: string
       public email?: string
       public password?: string
       public national_id?: number
       public role? :string
       public reset_token?:string
       public reset_token_expires? : Date
       public is_active?: boolean
       public is_account_verified?:boolean
       public verification_token?: string
       public verification_token_expires?: Date
       public address_id?: string
       public krapin?: string
       public latitude?: string
       public longitude?: string
       public createdAt?: Date
       public updatedAt?: Date

    // @BeforeCreate
    // static async hashedPassword(instance: User) {
    //     const password = instance.dataValues.password
    //     instance.password = await hashPassword({password})
       
    // }
    }
    User.init({
        id: {
            primaryKey: true,
            type:DataTypes.UUID, 
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        national_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true
        },
        krapin: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Address",
                key: "id",
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        reset_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        reset_token_expires: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_account_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        verification_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        verification_token_expires: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    
     },{
        sequelize,
        modelName: "User",
        tableName: "User",
     }
      )
     return User
}    

export default user