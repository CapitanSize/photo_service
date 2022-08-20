const {Imagine} = require("./models/models");
const Error = require('./errors/Errors')

class ImagineController {
    async create(res, req, next) {
        try {
            const {img, name, description, createdDate} = req.body
            const imagine = await Imagine.create({
               img, name, description, createdDate
            })
            return res.json(imagine)
        } catch (e) {
            next(Error.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {page, limit} = req.query
        page = page || 1
        limit = limit || 20
        let offset = limit * page - limit
        let imagines = await Imagine.findAndCountAll({limit, offset})
        return res.json(imagines)
    }
    async getOne(req, res) {
        const {id} = req.params
        const imagine = await Imagine.findOne({
            where: {id}
        })
        res.json(imagine)
    }
    async delete(req, res) {
        const {id} = req.params
        await Imagine.destroy({
            where: {id}
        })

    }
    async update(res, req, next) {
        try {
            const {id} = req.params
            const {name, description, createdDate} = req.body
            const img = await Imagine.update({
                name: {name},
                description: {description},
                createdDate: {createdDate}
            },{
                where: {id}
            })
            return res.json(img)
        } catch (e) {
            next(Error.badRequest(e.message))
        }


    }
}

module.exports = new ImagineController()