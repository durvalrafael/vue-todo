
import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import State from '@/store/store'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('State', () => {
  it('renders a value from $store.state', () => {
    const wrapper = shallow(State, {
      mocks: {
        $store: {
          state: {
            newTodo: 'teste todo'
          }
        }
      },
      localVue
    })
    expect(wrapper.find('.state-1')
      .text().trim()).toEqual('teste todo')
  })
})