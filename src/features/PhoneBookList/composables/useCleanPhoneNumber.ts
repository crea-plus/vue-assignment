export default function useCleanPhoneNumber(phoneNumber: string): number {
    return Number(phoneNumber.replace(/\D/g, ''))
}
