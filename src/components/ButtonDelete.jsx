import React from 'react';

import { canAction } from '../libs/CanAction';
import { ACTION_TYPE } from '../configs';

function ButtonDelete({ resource, component: Component }) {
  return (
    <>
      {canAction(ACTION_TYPE.DELETE, resource) && Component}
    </>
  )
}

export default ButtonDelete