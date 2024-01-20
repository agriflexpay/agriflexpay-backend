import { array, number, object, string, TypeOf } from "zod";


 const createKukuSchema = object(
    {
        body: object(
            {
                name: string({
                    required_error: "name Name is required"
                }),
                description: string({
                    required_error: "description name is required"
                }),
                amount: number({
                    required_error: "amount is required"
                }),
                duration: number({
                    required_error: "duration is required"
                }),
                interest_rate: number({
                    required_error: "interest_rate is required"
                }),
                vendor_id: string({
                    required_error: "vendor_id is required"
                }),
                type: array(number({
                    required_error: "type is required"
                })),
                puporse: string({
                    required_error: "puporse is required"
                }),
                maturity: number({
                    required_error: "maturity is required"
                }),
                averageEggProduction: number({
                    required_error: "averageEggProduction is required"
                }),
                meatProduction: number({
                    required_error: "meatProduction is required"
                }),
                averageWeight: number({
                    required_error: "averageWeight is required"
                }),
                feeding: string({
                    required_error: "feeding is required"
                }),
                setting: string({
                    required_error: "setting is required"
                }),
                declineinProduction: number({
                    required_error: "declineinProduction is required"
                }),
                diseaseResistance: string({
                    required_error: "diseaseResistance is required"
                }),
            }
        )
    }
)
 const updateKukuSchema = object(
    {
        body: object(
            {
                name: string({
                    required_error: "name Name is required"
                }),
                description: string({
                    required_error: "description name is required"
                }),
                amount: number({
                    required_error: "amount is required"
                }),
                duration: number({
                    required_error: "duration is required"
                }),
                interest_rate: number({
                    required_error: "interest_rate is required"
                }),
                type: array(number({
                    required_error: "type is required"
                })),
                puporse: string({
                    required_error: "puporse is required"
                }),
                maturity: number({
                    required_error: "maturity is required"
                }),
                averageEggProduction: number({
                    required_error: "averageEggProduction is required"
                }),
                meatProduction: number({
                    required_error: "meatProduction is required"
                }),
                averageWeight: number({
                    required_error: "averageWeight is required"
                }),
                feeding: string({
                    required_error: "feeding is required"
                }),
                setting: string({
                    required_error: "setting is required"
                }),
                declineinProduction: number({
                    required_error: "declineinProduction is required"
                }),
                diseaseResistance: string({
                    required_error: "diseaseResistance is required"
                }),
            }
        )
    }
)
 const params = object({
    params: object({
        id: string({
            required_error: "ID is required"
        })
    })
})

export const kukuschemas = {
    createKukuSchema,
    updateKukuSchema,
    params
}
