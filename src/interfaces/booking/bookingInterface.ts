import { RoomInterface } from "../room/RoomInterface";

export interface BookingInterface {
    id: number;
    name: string;
    order_date: string;
    check_in: string;
    hour_check_in: string;
    check_out: string;
    hour_check_out: string;
    rate: string
    room: { id: number };
    special_request: string | undefined;
    status: string;
}


