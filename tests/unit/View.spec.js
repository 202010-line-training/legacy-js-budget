import { createLocalVue, shallowMount } from '@vue/test-utils'
import Toasted from 'vue-toasted'

import View from '@/views/View'

jest.mock('@/api')

describe.skip('View.vue', () => {
  let localVue
  let vm

  beforeAll(() => {
    localVue = createLocalVue()
    localVue.use(Toasted)
    localVue.toasted.show = jest.fn()
    vm = shallowMount(View, { localVue }).vm
  })

  it('should mutate $data.result when methods#go called', async () => {
    await vm.go()

    expect(vm.$data.result).toMatch('test')
  })

  it('should toast be called when methods#go called', async () => {
    await vm.go()

    expect(vm.$toasted.show).toBeCalledWith('link', {
      type: 'info',
      position: 'bottom-center',
      duration: 2000
    })
  })
})
