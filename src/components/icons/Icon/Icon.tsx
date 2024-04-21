import * as React from 'react';
import cn from 'classnames';

import styles from "./styles.module.scss";

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | string;
  width?: number;
  height?: number;
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = (props) => {
  let { width, height, ...other } = props;

  if (!width) width = 24;
  if (!height) height = 24;

  return (
    <svg
      className={cn(
        styles.icon,
        styles[`icon_${props.color}`]
      )}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...other}
    >
      {props.children}
    </svg>
  );
};

export default React.memo(Icon);
