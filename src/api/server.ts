let token = '1e59b70d5ed25988a095312b68a49b8f';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://new-street-fighter-flask-shell.onrender.com/api/fighters`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json();
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://new-street-fighter-flask-shell.onrender.com/api/fighters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new fighter on server');
        }

        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://new-street-fighter-flask-shell.onrender.com/api/fighters/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update fighter on server');
        }

        return await response.json();
    },

    delete: async(id: string) => {
        const response = await fetch(`https://new-street-fighter-flask-shell.onrender.com/api/fighters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete fighter from server');
        }

        return await response.json();
    }
}
