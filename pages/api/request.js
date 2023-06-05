import prisma from '../../lib/prisma'

// POST /api/find/brand
export default async function findBrand(req, res) {
    const type = req.body.type
    delete req.body.type
    res.json(await prisma[type].findMany( req.body ))
}
