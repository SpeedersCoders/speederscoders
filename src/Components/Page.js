import React, { memo, useContext, useEffect } from 'react'
import resourceContext from '../context/resources/resourceContext';

// used to change title of page
function Page({ title, children }) {
  const ResourceContext = useContext(resourceContext) || {};
  const { pageTitle } = ResourceContext;
  useEffect(() => {
    if (title)
      document.title = `${title} | SpeedersCoders`;
    else
      document.title = `${pageTitle} | SpeedersCoders`;
    // eslint-disable-next-line
  }, [pageTitle, title]);

  return (
    <>
      {children}
    </>
  )
}

export default memo(Page);