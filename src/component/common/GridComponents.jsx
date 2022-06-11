import React, { Component, useCallback, useMemo, useRef, useState } from 'react'

export function AgGridCheckbox (props) {
    const boolValue = props.value && props.value.toString() === 'true';
    const [isChecked, setIsChecked] = useState(boolValue);
    const onChanged = () => {
      props.setValue(!isChecked);
      setIsChecked(!isChecked);
    };
    return (
      <div>
        <input type="checkbox" checked={isChecked} onChange={onChanged} />
      </div>
    );
  }