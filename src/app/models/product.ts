export class Product {
    category?: string
    description?: string
    id!: number
    image?: string
    price?: number
    rating?: Rating
    title?: string
}

export class Rating {
    count?: number
    rate?: number
}
