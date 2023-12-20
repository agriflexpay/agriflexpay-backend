import { array, number, object, string, TypeOf,boolean } from "zod";

const diseaseSchema = object(
    {
        body: object({
            name: string({
                required_error: "Disease name is required"
            }),
            occurance_pattern: string({
                required_error: "Occurance pattern is required"
            }),
            causes: array(
                string({
                    required_error: "Cause is required"
                })
            ),
            prevention_and_control: array(string({
                required_error: "Prevention and control is required"
            })),
            transmission: array(
                string({
                    required_error: "Transmission is required"
                })
            ),
            signs_and_symptoms: array(string({
                required_error: "Signs and symptoms is required"
            })),
            treatment: array(string({
                required_error: "Treatment is required"
            })),
            victim: array(
                string({
                    required_error: "Victim is required(pets, plants, animals)"
                })
            ),
            location_id: string({
                required_error: "Location is required"
            }),
            farmer_id: string({
                required_error: "Farmer is required"
            })
        })
    })

export const params = object({
    id: string({
        required_error: "Disease ID required"
    })
})
export const updateNameAndOccurancePattern = object({
    body: object({
        name: string({
            required_error: "Disease name is required"
        }),
        occurance_pattern: string({
            required_error: "Occurance pattern is required"
        }),
    })
})
export const updateCauses = object({
    body: object({
        causes: array(
            string({
                required_error: "Cause is required"
            })
        ),
        deleteflag: boolean({
            required_error: "Delete flag is required"
        })
    })
})
export const updatePreventionAndControl = object({
    body: object({
        prevention_and_control: array(string({
            required_error: "Prevention and control is required"
        }))
    })
})
export const updateTransmission = object({
    body: object({
        transmission: array(
            string({
                required_error: "Transmission is required"
            })
        )
    })
})
export const updateSignsAndSymptoms = object({
    body: object({
        signs_and_symptoms: array(string({
            required_error: "Signs and symptoms is required"
        }))
    })
})
export const updateTreatment = object({
    body: object({
        treatment: array(string({
            required_error: "Treatment is required"
        }))
    })
})
export const updateVictim = object({
    body: object({
        victim: array(
            string({
                required_error: "Victim is required(pets, plants, animals)"
            })
        )
    })
})
export const updateLocation = object({
    body: object({
        location_id: string({
            required_error: "Location is required"
        })
    })
})
export const updateFarmer = object({
    body: object({
        farmer_id: string({
            required_error: "Farmer is required"
        })
    })
})

export default diseaseSchema;

export type CreateAddressInput = TypeOf<typeof diseaseSchema>;