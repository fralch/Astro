import { type APIspaceX, type Doc } from '../types/api.ts';

export async function getSpaceX() {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: {},
            options: {
                limit: 10
            }
        })

    });
    const { docs: lauches } = await res.json() as APIspaceX;
    return lauches;
}

export async function getSpaceXid({id}: {id: string}) {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
    const lauch = await res.json() as Doc;
    console.log(lauch);
    return lauch;
    
}