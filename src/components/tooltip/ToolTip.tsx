import * as Tooltip from '@radix-ui/react-tooltip'

interface ToolTipProps {
  content: string
}

const ToolTip = ({ content }: ToolTipProps) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <button className="icon-button">
            <i className="tooltip-icon">&#9432;</i>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="tooltip-content">
            {content}
            <Tooltip.Arrow className="tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default ToolTip
