import moment from 'moment'
import * as budgetService from '@/services/budget'
import { format } from 'path';

export default class QueryBudget {
  constructor() { }

  async query(start, end) {
    let startDay = moment(start, 'YYYY/M/D')
    let endDay = moment(end, 'YYYY/M/D')

    let startMonth = moment(start, 'YYYY/M').year() + moment(start, 'YYYY/M').month
    let endMonth = moment(end, 'YYYY/M').year() + moment(end, 'YYYY/M').month

    const startMonthDays = moment(startDay, 'YYYY/M/D').daysInMonth()
    const endMonthDays = moment(startDay, 'YYYY/M/D').daysInMonth()
    const allBudgets = await this.getAllBudgets()
    const startBudget = allBudgets.find(el => el.month === startDay.format('YYYY/M'))
    const endBudget = allBudgets.find(el => el.month === endDay.format('YYYY/M'))
    let budget = 0
    budget += startBudget.amount / (startMonthDays - startDay.date()+1)
    console.log(startBudget.amount / (startMonthDays - startDay.date()+1))
    budget += endBudget.amount / (endDay.date() +1 - endMonthDays)
    console.log(endBudget.amount / (endDay.date() +1 - endMonthDays))

    for (let i = startMonth + 1; i < endMonth; i++) {
      budget += allBudgets.find(el => el.month === startDay.add(1, 'month').format('YYYY/M')).amount
    }
    return budget
  }

  getAllBudgets() {
    return budgetService.findAllBudget()
  }
}