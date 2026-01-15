import { DarkMode, Gradient, LightMode } from '@/components/Icon'
import { FaRegMoneyBillAlt, FaMoneyBillAlt } from 'react-icons/fa'

export function PurchaseIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 12 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 16 7)"
        />
      </defs>
      <LightMode>
        <circle cx={12} cy={12} r={12} fill={`url(#${id}-gradient)`} />
        <FaRegMoneyBillAlt color="black" size="2rem" />
      </LightMode>

      <DarkMode>
        <FaMoneyBillAlt fill="#10A9EA" size="2rem" />
      </DarkMode>
    </>
  )
}
