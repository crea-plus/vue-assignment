import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Button from './Button.vue'

describe('Button Component', () => {
  it('renders icon before text', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        iconBefore: '<div class="icon-class"></div>'
      }
    })
    const icon = wrapper.find('.icon-class')
    expect(icon.exists()).toBe(true)
  })

  it('render icon after text', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        iconAfter: '<div class="icon-class"></div>'
      }
    })
    const icon = wrapper.find('.icon-class')
    expect(icon.exists()).toBe(true)
  })

  it('emits a click event when clicked', async () => {
    const wrapper = shallowMount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
