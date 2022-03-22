import { Address } from './address.interface'
import { Geolocalization } from './geolocalization.interface'
import { Company } from './company.interface'

export interface User {
    id?: number,
    name: string,
    username: string, 
    email: string,
    address: Address
    geo: Geolocalization,
    phone: string,
    website:string,
    company: Company
}