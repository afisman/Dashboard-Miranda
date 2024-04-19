export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';

export const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const amenities_list = [
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Smart Security', label: 'Smart Security' },
    { value: 'Locker', label: 'Locker' },
    { value: 'Shower', label: 'Shower' },
    { value: '24/7 Online Support', label: '24/7 Online Support' },
    { value: 'Kitchen', label: 'Kitchen' },
    { value: 'Cleaning', label: 'Cleaning' },
    { value: 'High Speed Wifi', label: 'High Speed Wifi' },
    { value: 'Air Conditioner', label: 'Air Conditioner' },
    { value: 'Towels', label: 'Towels' },
    { value: 'Grocery', label: 'Grocery' },
    { value: 'Shop Near', label: 'Shop Near' },
    { value: 'Grocery', label: 'Grocery' },
    { value: 'Terrace', label: 'Terrace' },
    { value: 'Room Service', label: 'Room Service' },
];

export const dayInMs = 86400000;
