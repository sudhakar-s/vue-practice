const COLOR_CLASS_MAP = {
  currentColor: 'current-color',
  'surface.text.white.normal': 'text-surface-white-normal',
  'surface.text.gray.subtle': 'text-surface-gray-subtle',
  'success.text.normal': 'text-success-normal',
  'warn.text.normal': 'text-warn-normal',
  'surface.text.skyblue.normal': 'text-surface-skyblue-normal',
} as const

export type Colors = keyof typeof COLOR_CLASS_MAP

const SIZE = {
  small: 16,
  medium: 20,
} as const

export type Size = keyof typeof SIZE


const useIconProps = ({ size = 'medium', color = 'surface.text.white.normal' }: { size?: Size; color?: Colors }) => {

  return {
    width: SIZE[size],
    height: SIZE[size],
    colorClass: COLOR_CLASS_MAP[color],
  }
}

export { useIconProps }
