import db from '../utils/db'

export const getDepartments = async () => db.department.findMany()

export const getDepartment = async (id) =>
  db.department.findUnique({ where: { DepartmentId: id } }) // Had to change to capital "D" cause getting "Unknown arg `departmentId` in where.departmentId for type DepartmentWhereUniqueInput"

export const addDepartment = async (name, companyId) =>
  db.department.create({ data: { name, companyId } })
