import { DarkMode, Gradient, LightMode } from '@/components/Icon'
import { RiUserAddLine } from 'react-icons/ri'
import { FaUserPlus } from 'react-icons/fa'

export function UserIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 20 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
        />
      </defs>
      <LightMode>
        <circle
          cx={12}
          cy={12}
          r={12}
          fill={`url(#${id}-gradient)`}
          className="stroke-custom"
        />
        <RiUserAddLine color="black" size="2rem" />
      </LightMode>

      <DarkMode>
        <FaUserPlus fill="#10A9EA" size="2rem" />
      </DarkMode>
    </>
  )
}
