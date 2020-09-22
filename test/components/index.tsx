// 默认注释
import React from 'react';

const iconList = [
  'notify-close',
]

export interface IconProps {
    color?: string
    className?: string
    height?: number
    kind?: string | any
    onClick?: () => void
    preview?: boolean
    size?: number
    style?: any
    width?: number
    wrapperStyle?: any
}

const Icon: React.FC<IconProps> = (props: IconProps) => {

    const renderPreview = () => (
      <div>
        {iconList.map(kind => renderPreviewKind(kind))}
      </div>
    )

    const renderIcon = kind => {
      const {wrapperStyle} = props;
      if (wrapperStyle) {
        return <div style={wrapperStyle}>{getIcon(kind)}</div>
      }
      return getIcon(kind)
    }

    const renderPreviewKind = kind => {
      return (
        <div key={kind}>
          <h3>&lt;Icon kind="{kind}" /&gt;</h3>
          {renderIcon(kind)}
        </div>
      )
    }

    const getIcon = kind => {
      const {height, onClick, size, style, width, color, className, ...rest} = props;

      const iconMap = {
        'notify-close': <?xml version="1.0" encoding="UTF-8"?>
<svg fill={color} height={height || size} width={width || size} onClick={onClick} style={style} className={className} viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 64 (93537) - https://sketch.com --> <title>icon/pop close</title> <desc>Created with Sketch.</desc> <defs> <path d="M16.41425,15.00025 L20.70725,10.70725 C21.09825,10.31625 21.09825,9.68425 20.70725,9.29325 C20.31625,8.90225 19.68425,8.90225 19.29325,9.29325 L15.00025,13.58625 L10.70725,9.29325 C10.31625,8.90225 9.68425,8.90225 9.29325,9.29325 C8.90225,9.68425 8.90225,10.31625 9.29325,10.70725 L13.58625,15.00025 L9.29325,19.29325 C8.90225,19.68425 8.90225,20.31625 9.29325,20.70725 C9.48825,20.90225 9.74425,21.00025 10.00025,21.00025 C10.25625,21.00025 10.51225,20.90225 10.70725,20.70725 L15.00025,16.41425 L19.29325,20.70725 C19.48825,20.90225 19.74425,21.00025 20.00025,21.00025 C20.25625,21.00025 20.51225,20.90225 20.70725,20.70725 C21.09825,20.31625 21.09825,19.68425 20.70725,19.29325 L16.41425,15.00025 Z" id="notify-close-1"ath-1"></path> </defs> <g id="icon/pop-close" stroke="none" stroke-width="1"> <g id="icon"> <rect id="Rectangle" x="0" y="0" width="30" height="30"></rect> <mask id="notify-close-2"ask-2"> <use xlinkHref="#notify-close-1"></use> </mask> <use id="Icon" xlinkHref="#notify-close-1"></use> <rect id="color" mask="url(#notify-close-2)"></rect> </g> </g>
</svg>,
        };
      return iconMap(kind);
    }

    const { kind, preview } = props;
    const icon = preview ? renderPreview() : renderIcon(kind);
    return <>{icon}</>;
}

Icon.defaultProps = {
    size: 16
};

export default Icon;