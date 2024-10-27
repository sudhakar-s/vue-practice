export type Weight = keyof typeof WEIGHTS

const WEIGHTS = {
  normal: 'text-normal',
  medium: 'text-medium',
  'semibold': 'text-semibold',
  'bold': 'text-bold',
} as const

export const getWeightClass = (weight: Weight) => {
  return WEIGHTS[weight]
}