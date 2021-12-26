import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

// Functional link component which delays page navigation
export const DelayLink: React.FC<any> = (props) => {
  const { delay, onDelayStart, onDelayEnd, replace, to, ...rest } = props;
  let timeout: null | ReturnType<typeof setTimeout> = null;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = (e: any) => {
    // if trying to navigate to current page stop everything
    if (location?.pathname === to) return;

    onDelayStart(e, to);
    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        navigate(to, { replace: true });
      } else {
        navigate(to);
      }
      onDelayEnd(e, to);
    }, delay);
  };

  return <Link {...rest} to={to} onClick={handleClick} />;
};

export default DelayLink;
