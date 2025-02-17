import React from 'react'

function SvgKeyboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 17H4V7h16v10zM3.5 5h17c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 5.673 2.673 5 3.5 5zM8 10H6V8h2v2zm8 0h2V8h-2v2zm-4.667 0h-2V8h2v2zm1.333 0h2V8h-2v2zM8 13H6v-2h2v2zm8 0h2v-2h-2v2zm-4.667 0h-2v-2h2v2zm1.333 0h2v-2h-2v2zM16 16H8v-1.98h8V16z"
      />
    </svg>
  )
}

export default SvgKeyboard
