// 默认注释
import React from "react";

const iconList = [
  'example',
]

interface Props {
    name?: string;
    size?: number;
    color?: string;
    width?: number;
    height?: number;
    preview?: boolean;
    wrapperClass?: string;
    wrapperStyle?: any;
    onClick?: () => void;
}

const Icon: React.FC<Props> = (props: Props) => {

  const renderPreview = (): React.ReactElement => {
    iconList.map(name => (
      <div key={name}>
        <h3>
          <Icon name="{name}" />
        </h3>
        {renderIcon(name)}
      </div>
    ));
  };    

  const renderIcon = (name: string) : React.ReactElement => {
    const { wrapperStyle } = props;
    return wrapperStyle ? (
      <div style={wrapperStyle}>{getIcon(name)}</div>
    ) : (
      getIcon(name)
    );
  };

  const getIcon = (name: string) : React.ReactElement => {
    const { size, width, height, color, wrapperClass, wrapperStyle, onClick } = props;

    const iconMap = {
      'example': 
<svg id="home-pro" fill={color} height={height || size} width={width || size} onClick={onClick} style={wrapperStyle} className={wrapperClass} viewBox="0 0 26 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <title>Pro</title> <desc>Created with Sketch.</desc> <g id="首页" stroke="none" stroke-width="1"> <g id="Pro终端---首页" transform="translate(-333.000000, -705.000000)"> <g id="Group-12" transform="translate(230.000000, 602.000000)"> <g id="Group-4" transform="translate(34.000000, 24.000000)"> <g id="Group-2" transform="translate(9.000000, 76.000000)"> <g id="Pro" transform="translate(60.000000, 3.000000)"> <rect id="Rectangle" x="0" y="0" width="26" height="15" rx="2"></rect> <path d="M3.9745,12 L3.9745,9.107 L5.0635,9.107 C6.8125,9.107 8.2095,8.271 8.2095,6.412 C8.2095,4.487 6.8235,3.86 5.0195,3.86 L2.3465,3.86 L2.3465,12 L3.9745,12 Z M4.9535,7.82 L3.9745,7.82 L3.9745,5.147 L4.8985,5.147 C6.0205,5.147 6.6145,5.466 6.6145,6.412 C6.6145,7.347 6.0755,7.82 4.9535,7.82 Z M11.3115,12 L11.3115,8.92 L12.4445,8.92 L14.1165,12 L15.9315,12 L14.0285,8.667 C14.9635,8.304 15.5795,7.545 15.5795,6.324 C15.5795,4.454 14.2265,3.86 12.5215,3.86 L9.6835,3.86 L9.6835,12 L11.3115,12 Z M12.3675,7.633 L11.3115,7.633 L11.3115,5.147 L12.3675,5.147 C13.4125,5.147 13.9845,5.444 13.9845,6.324 C13.9845,7.193 13.4125,7.633 12.3675,7.633 Z M20.4195,12.154 C22.5755,12.154 24.0605,10.537 24.0605,7.897 C24.0605,5.257 22.5755,3.706 20.4195,3.706 C18.2635,3.706 16.7785,5.246 16.7785,7.897 C16.7785,10.537 18.2635,12.154 20.4195,12.154 Z M20.4195,10.746 C19.2095,10.746 18.4395,9.635 18.4395,7.897 C18.4395,6.148 19.2095,5.103 20.4195,5.103 C21.6295,5.103 22.3995,6.148 22.3995,7.897 C22.3995,9.635 21.6295,10.746 20.4195,10.746 Z" id="example-1"></path> </g> </g> </g> </g> </g> </g>
</svg>,
      };
    return iconMap[name];
  }

  const { name, preview } = props;
  const icon = preview ? renderPreview() : renderIcon(name);
  return <>{icon}</>;
}

Icon.defaultProps = {
    size: 16
};

export default Icon;