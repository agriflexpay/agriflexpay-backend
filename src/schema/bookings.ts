import { number, object, string, TypeOf } from "zod";


const bookings_Schema = object(
    {
        body: object(
            {
                user_uuid: string(
                    {
                        required_error: "User uuid is required"
                    }
                ),
                plan_uuid: string(
                    {
                        required_error: "Plan uuid is required"
                    }
                ),
                vendor_uuid: string(
                    {
                        required_error: "Vendor uuid is required"
                    }
                ),

                
            }
        )
    })



export const Bookingschema = {
    bookings_Schema: bookings_Schema,
  
}
export type MpesaExpressInput = TypeOf<typeof bookings_Schema>;