const boom = require('@hapi/boom');
const model = require('../model/IPs.model');
const requestIP = require('request-ip');

class IPsService {

  constructor() {
    this.IPs = [
      {
        id: '1',
        date: '24/01/2022 23:21:16',
        ip: '190.147.132.40',
        url: '/mantenimient-impresora-bogota'
      },
      {
        id: '2',
        date: '24/01/2022 23:21:16',
        ip: '190.147.132.40',
        url: '/mantenimient-impresora-bogota'
      }
    ];
  }

  async create(req, res) {
    const IPModel = new model();
    IPModel.date = new Date();
    IPModel.ip = requestIP.getClientIp(req);
    IPModel.url =req.body.url;
    IPModel.reloaded = req.body.reloaded;

    console.log(IPModel);

    await IPModel.save((err, doct) => {
      if (err) {
        throw boom.badImplementation('Error al Guardar!');
      } else {
        res.status(201).json(doct);
      }
    });
  }

  async find() {
    const IPs = await model.find();
    return IPs;
  }

  async findOne(id) {
    const IP = await model.findById(id);
    if (!IP) {
      throw boom.notFound('IPs not found!');
    }
    return IP;
  }

  async update(id, changes) {
    const IP = await model.findById(id);
    if (!IP) {
      throw boom.notFound('IPs not found');
    }
    const Update = await model.updateOne({_id: id}, changes)
    return Update;
  }

  async delete(id) {
    const IP = await model.findById(id);
    if (!IP) {
      throw boom.notFound('IPs not found');
    }
    const Update = await model.deleteOne({_id: id})
    return Update;
  }

}

module.exports = IPsService;
