/* External dependencies */
import React, { useRef } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/storyUtils'
import { styled } from '../../foundation'
import Overlay from './Overlay'
import { OverlayPosition } from './Overlay.types'

export default {
  title: getTitle(base),
  component: Overlay,
  argTypes: {
    position: {
      control: {
        type: 'radio',
        options: [
          OverlayPosition.TopCenter,
          OverlayPosition.TopLeft,
          OverlayPosition.TopRight,
          OverlayPosition.RightCenter,
          OverlayPosition.RightTop,
          OverlayPosition.RightBottom,
          OverlayPosition.BottomCenter,
          OverlayPosition.BottomLeft,
          OverlayPosition.BottomRight,
          OverlayPosition.LeftCenter,
          OverlayPosition.LeftTop,
          OverlayPosition.LeftBottom,
          OverlayPosition.InnerLeftTop,
          OverlayPosition.InnerLeftBottom,
          OverlayPosition.InnerRightTop,
          OverlayPosition.InnerRightBottom,
        ],
      },
    },
    marginX: {
      control: {
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
      },
    },
    marginY: {
      control: {
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
      },
    },
  },
}

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 500px;
  overflow: scroll;
  border: 1px solid ${props => props.foundation?.theme?.['bg-black-dark']};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 800px;
`

const Target = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 40px;
  background-color: ${props => props.foundation?.theme?.['bg-black-dark']};
  border-radius: 4px;
`

const Children = styled.div`
  width: 250px;
  height: 150px;
  overflow-y: scroll;
  background-color: ${props => props.foundation?.theme?.['bg-black-dark']};
  border-radius: 4px;
`

const ScrollContent = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 350px;
  padding: 5px;
  color: white;
`

const Template = (props) => {
  const targetRef = useRef<any>()
  const containerRef = useRef<any>()

  return (
    <Container ref={containerRef}>
      <Wrapper>
        <Target ref={targetRef}>
          target
        </Target>
        <Overlay
          {...props}
          target={targetRef.current}
          container={containerRef.current}
        >
          <Children>
            <ScrollContent>
              {
                `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.`
              }
            </ScrollContent>
          </Children>
        </Overlay>
      </Wrapper>
    </Container>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  show: false,
  position: OverlayPosition.BottomCenter,
  marginX: 0,
  marginY: 0,
  keepInContainer: false,
  withTransition: false,
}
