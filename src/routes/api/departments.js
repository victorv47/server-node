import { Router } from 'express'

import { getDepartments } from '../../models/departments'

const router = Router()

router.get('/', async (req, res) => {
  const departments = await getDepartments()
  res.send(departments)
})

export default router
