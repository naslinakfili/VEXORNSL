import { NextResponse } from 'next/server';
export interface ItemsProducts {
    id: number,
    name: string,
    price: number,
    url:string,
}

export async function GET() {
    const products: ItemsProducts[] = [
        { id: 1, name: 'Labtop Azer', price: 450, url: '/electronics/labtop/labtop-azer-main/labtop-azer-main01.png' },
        { id: 2, name: 'Earpondes', price: 75, url: '/electronics/earphones/airphone-white-main/airphone-white-main01.png' },
        { id: 3, name: 'Hanset Bluetoutch', price: 45, url: '/aksessories/chargers/charger-main01.png' },
        { id: 4, name: 'Mouse Gaming', price: 55, url: '/aksessories/keyboards/keyboard-main01.png' },
    ];

    return NextResponse.json(products);
}