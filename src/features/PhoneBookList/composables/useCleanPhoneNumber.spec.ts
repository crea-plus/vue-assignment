import { describe, expect, it } from 'vitest'
import useCleanPhoneNumber from './useCleanPhoneNumber'

describe('useCleanPhoneNumber', () => {
    it('removes non-numeric characters', () => {
        const result = useCleanPhoneNumber('(123) 456-7890')
        expect(result).toBe(1234567890)
    })

    it('leaves numeric characters intact', () => {
        const result = useCleanPhoneNumber('1234567890')
        expect(result).toBe(1234567890)
    })

    // better to fallback to 0 than to throw an error or return NaN
    it('returns 0 for non-numeric input', () => {
        const result = useCleanPhoneNumber('abcdefg')
        expect(result).toBe(0)
    })

    // better to fallback to 0 than to throw an error or return NaN
    it('returns 0 for empty input', () => {
        const result = useCleanPhoneNumber('')
        expect(result).toBe(0)
    })
})
