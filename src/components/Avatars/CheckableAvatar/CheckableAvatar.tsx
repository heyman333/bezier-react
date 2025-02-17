/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { Avatar } from '../Avatar'
import CheckableAvatarProps from './CheckableAvatar.types'
import { CheckableAvatarWrapper, CheckIcon } from './CheckableAvatar.styled'

// TODO: 테스트 코드 작성
const CHECKABLE_AVATAR_TEST_ID = 'bezier-react-checkable-avatar'

function CheckableAvatar({
  isChecked = false,
  isCheckable = true,
  checkableWrapperClassName,
  checkableWrapperInterpolation,
  children,
  ...props
}: CheckableAvatarProps) {
  return (
    <CheckableAvatarWrapper
      data-testid={CHECKABLE_AVATAR_TEST_ID}
      isChecked={isChecked}
      isCheckable={isCheckable}
      className={checkableWrapperClassName}
      interpolation={checkableWrapperInterpolation}
    >
      <CheckIcon
        name="check"
        color="bgtxt-absolute-white-normal"
      />
      <Avatar
        {...props}
      >
        { children }
      </Avatar>
    </CheckableAvatarWrapper>
  )
}

export default CheckableAvatar
