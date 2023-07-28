const express = require('express');
const router = express.Router();
const IPsService = require('./../services/IPs.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updatePutIPSchema, updatePatchIPSchema, getIPSchema } = require('./../schemas/IPs.schema');

const service = new IPsService();

router.get('/', async (req, res, next) => {
  try {
    const IPs = await service.find();
    console.log('find' + IPs.length);
    res.json(IPs);
  } catch (error) {
    next(error);
  }
});

router.get('/findByDateRange', async (req, res, next) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const IPs = await service.findByDateRange(fechaInicio, fechaFin);
    console.log('findByDateRange' + IPs.length);
    res.json(IPs);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(getIPSchema,'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const ip = await service.findOne(id)
    res.json(ip);
  } catch (error) {
    next(error);
  }
});

router.post('/',
async (req, res, next) => {
  try {
    const newIP = await service.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
validatorHandler(getIPSchema,'params'),
validatorHandler(updatePatchIPSchema,'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body =  req.body;
    const IP = await service.update(id, body);
    res.status(200).json(IP);
  } catch (error) {
    next(error);
  }
});

router.put('/:id',
validatorHandler(getIPSchema,'params'),
validatorHandler(updatePutIPSchema,'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const IP = await service.update(id, body);
    res.json(IP);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',  async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
