import React from 'react';

const ThemedDecorations = (props) => {
  return (
    <div>
      { React.Children.map(props.children,
        child => {
          return React.cloneElement(child, { className: props.theme })
        }) }
    </div>
  )
}

export default ThemedDecorations;
