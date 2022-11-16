import db from '../utils/db'

export const getCompanies = async () => db.company.findMany()

export const getCompany = async (id) =>
  db.company.findUnique({
    where: { companyId: id },
    include: {
      Department: true, // kept "Department" because changing it was causing an error for me.
    },
  })

export const addCompany = async (name) => db.company.create({ data: { name } })
