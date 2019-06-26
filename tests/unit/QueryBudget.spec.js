import QueryBudget from '@/QueryBudget'
import * as budgetService from '@/services/budget'

jest.mock('@/services/budget')

const bugetData1 = [
  { month: '2019/1', amount: 31 }
]

const bugetData2 = [
  { month: '2019/1', amount: 31 },
  { month: '2019/2', amount: 28 }
]

describe('Budeget.js', () => {
  it('should return $31 when query 1/1 - 1/31', async() => {
    budgetService.findAllBudget = jest.fn().mockResolvedValueOnce(bugetData1)
    const queryBudget = new QueryBudget
    expect(await queryBudget.query('2019/1/1', '2019/1/31')).toBe(31)
  })
  it('should return $1 when query 1/1 - 1/1', async() => {
    budgetService.findAllBudget = jest.fn().mockResolvedValueOnce(bugetData1)
    const queryBudget = new QueryBudget
    
    expect(await queryBudget.query('2019/1/1', '2019/1/1')).toBe(1)
  })
  it('should return $59 when query 1/1 - 2/28', async() => {
    budgetService.findAllBudget = jest.fn().mockResolvedValueOnce(bugetData2)
    const queryBudget = new QueryBudget

    expect(await queryBudget.query('2019/1/1', '2019/2/28')).toBe(59)
  })
})
