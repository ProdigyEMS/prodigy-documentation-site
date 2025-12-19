import { DarkMode, Gradient, LightMode } from '@/components/Icon'
import { SiGoogleclassroom } from 'react-icons/si'

export function AssignIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 12 11)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
        />
      </defs>
      <LightMode>
        <circle cx={12} cy={12} r={12} fill={`url(#${id}-gradient)`} />
        <SiGoogleclassroom
          color="black"
          size="2rem"
          className="stroke-custom"
        />
      </LightMode>

      <DarkMode>
        <SiGoogleclassroom
          fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          size="2rem"
        />
      </DarkMode>
    </>
  )
}
