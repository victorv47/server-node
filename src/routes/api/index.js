import { Router } from 'express'

import persons from './persons'

const router = Router()

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoint' })
})

router.use('/persons', persons)

export default router
