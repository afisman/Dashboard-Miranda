import { RoomInterface } from '../room/roomInterface';

export interface BookingInterface {
    _id?: string;
    name: string;
    order_date: number;
    check_in: number;
    hour_check_in: string;
    check_out: number;
    hour_check_out: string;
    discount: number
    room: RoomInterface;
    special_request: string | undefined;
    status: string;
}


