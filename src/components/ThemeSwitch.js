import React, { Fragment, useRef, useEffect, useState } from 'react';

const ThemeSwitch = ({ preserveRasters = true, storeKey = 'ThemeSwitch' }) => {
  const cssString = `
        html { filter: invert(100%); background: #fefefe; }
        * { background-color: inherit }
      `;
  const rasterCss =
    'img:not([src*=".svg"]), video, [style*="url("] { filter: invert(100%) }';

  const isDeclarationSupported = (property, value) => {
    const prop = property + ':',
    el = document.createElement('test'),
    mStyle = el.style;
    el.style.cssText = prop + value;
    return mStyle[property];
  };

  const supported = useRef(!!isDeclarationSupported('filter', 'invert(100%)'));

  const [css, setCss] = useState(cssString);
  const [active, setActive] = useState(
    localStorage.getItem(storeKey) === 'true' || (!localStorage.getItem(storeKey) && matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (preserveRasters) {
      setCss(`${cssString} ${rasterCss}`);
    }
    return () => {
      setCss(cssString);
    };
  }, [preserveRasters]);

  useEffect(() => {
    localStorage.setItem(storeKey, active);
  }, [active, storeKey]);

  const toggle = () => {
    setActive(a => !a);
  };

  return (
    supported.current && (
      <Fragment>
        <button aria-pressed={active} onClick={toggle} className = 'bttn btn_middle'>
          
          <span aria-hidden="true">{active ? 'Dark theme' : 'Light theme'}</span>
        </button>
        <style media={active ? 'screen' : 'none'}>
          {active ? css.trim() : css}
        </style>
      </Fragment>
    )
  );
}; //code from  https://github.com/Heydon/react-theme-switch/blob/master/src/ThemeSwitch.js

export default ThemeSwitch;