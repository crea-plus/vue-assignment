import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Card from './Card.vue'

// For testing actual UI probably better to use Cypress
describe('Card Component', () => {
  it('renders a header', () => {
    const wrapper = shallowMount(Card, {
      slots: {
        header: '<div class="icon-class"></div>'
      }
    })

    const header = wrapper.find('.icon-class')
    expect(header.exists()).toBe(true)
  })
})
