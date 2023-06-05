///// TIPZ NOTE: FILE FOR AN OLD PROJECT - IT NEEDS TO BE DELETED OR RE-PUPOSED FOR TIPZ /////

class ApiRequest {
    async request (body, route='/api/request', method='POST') {
        try {
            const res = await fetch(route, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            })
            res.statusCode = 200
            return await res.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getClients() {
        const body = {type: 'client'}
        return this.request(body)
    }
    
    async getProviders() {
        const body = {type: 'provider'}
        return this.request(body)
    }

    async findClientsForProvider(providerId) {
        const body = {
            where : {
                clientPlans: {
                    some : {
                        providerId: providerId 
                    }
                }
            },
            type: 'client'
        }
        return this.request(body)
    }

    async findProvidersForClients(clientId) {
        const body = {
            where : {
                clientPlans: {
                    some : { 
                        clientId: clientId
                    }
                }
            },
            type: 'provider'
        }
        return this.request(body)
    }

    async findClientJournalEntries(clientId) {
        const body = {
            where : {
                clientId: clientId
            },
            orderBy: {
                createdAt: 'asc',
            },
            type: 'journalEntry'
        }
        return this.request(body)
    }

    async findProviderClientsJournalEntries(providerId) {
        const body = {
            where : { 
                client: {
                    clientPlans : {
                        some : {
                            providerId : providerId
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'asc',
            },
            type: 'journalEntry'
        }
        return this.request(body)
    }

}

export default new ApiRequest()