export interface RoomInterface {
    id: number;
    photos: string[];
    roomType: string;
    roomNumber: string;
    description: string;
    offer: string;
    priceNight: number;
    discount: number | null;
    cancellation: string;
    amenities: string[];
    status: string;
}

