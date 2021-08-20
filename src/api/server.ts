let token = 'e3ea94cdeb029351ee2e6292f2569f08fbf4148c129a60b5'

// Test that the api actually works through insomnia 
export const server_calls = {
    // retrival of our CRUD
    get: async () => {
        const response = await fetch(`https://drone-inventory-ej-hw.herokuapp.com/api/drones`, {
            method: 'GET',
            headers: {
                'Content-Type': 'applicaiton/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        // testing for if the response is not working:
        if(!response.ok) { // (!) is the same as (!=) in python
            throw new Error('Failed to fetch data from the server!')
        }
        return await response.json()
    },
    // everything we did in insomnia: create, update, delete, 
    create: async (data:any = {}) => {
        const response = await fetch(`https://drone-inventory-ej-hw.herokuapp.com/api/drones`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            if (!response.ok){ // (!) means not
                throw new Error(`Failed to create a Drone in the Database!`)
            }
    
            return await response.json()
        },
    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://drone-inventory-ej-hw.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){ // (!) means not
            throw new Error(`Did not update Drone - please try again!`)
        }
    },
    delete: async (id:string) => {
        const response = await fetch(`https://drone-inventory-ej-hw.herokuapp.com/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }            
        });
        if (!response.ok){ // (!) means not
            throw new Error(`Something went wrong here...`)
        }
    }
}
