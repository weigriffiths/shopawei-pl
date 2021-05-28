/** @jsx jsx */
import React, {useState} from 'react'
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  const [opacity, setOpacity] = useState(1)
  
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        opacity: opacity,
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image
        src={src}
        onMouseOver={() => setOpacity(.8)} 
        onMouseOut={() => setOpacity(1)} 
        alt="shopawei logo" />
    </Link>
  );
}
