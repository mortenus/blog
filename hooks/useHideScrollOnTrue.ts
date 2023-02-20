import React from 'react';

function preventDefault(e: any) {
  e.preventDefault();
}

export default function useHideScrollOnTrue(stateBool: boolean) {
  function disableScroll() {
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
  }
  function enableScroll() {
    document.body.removeEventListener('touchmove', preventDefault);
  }

  React.useEffect(() => {
    if (stateBool) {
      window.document.body.style.setProperty('overflow-y', `hidden`);
      disableScroll();
    } else {
      window.document.body.style.removeProperty('overflow-y');
      enableScroll();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateBool]);
}
