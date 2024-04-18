const getRate = (rate: number, discountBooking: number, discountRoom: number) => {
    const fixedRate = (rate * (discountRoom / 100)) - (discountBooking / 100) * (rate * (discountRoom / 100));
    return fixedRate
} 