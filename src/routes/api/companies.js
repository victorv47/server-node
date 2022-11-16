import { Router } from 'express'

import { getCompanies, getCompany, addComany } from '../../models/companies'

const router = Router()

router.get('/', async (req, res) => {
  const companies = await getCompanies()
  res.send(companies)
})

router.get('/:id', async (req, res) => {
  const company = await getCompany(req.params.id)
  if (company) {
    res.send(company)
  } else {
    res.status(404).send({ msg: 'Company Not Found' })
  }
})

router.post('/', async (req, res) => {
  const companyName = req.body.name
  if (companyName) {
    const company = await addComany(companyName)
    res.send(company)
  } else {
    res.status(404).send({ msg: 'Company name is required' })
  }
})

export default router
