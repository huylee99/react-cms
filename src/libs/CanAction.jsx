import { AbilityBuilder, Ability } from "@casl/ability";

// configs
import { ROLE_USER, ACTION_TYPE } from "../configs";

// read (view), create, update, delete

function defineAbilitiesFor(role) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  switch(role) {
    case ROLE_USER.ADMIN: {
      can([ACTION_TYPE.CREATE, ACTION_TYPE.UPDATE, ACTION_TYPE.DELETE, ACTION_TYPE.VIEW, ACTION_TYPE.READ], 'all');
      break;
    }
    case ROLE_USER.OPERATOR: {
      can([ACTION_TYPE.CREATE, ACTION_TYPE.UPDATE, ACTION_TYPE.VIEW, ACTION_TYPE.READ], 'KANBAN');
      break;
    }
    default: {
      cannot([ACTION_TYPE.CREATE, ACTION_TYPE.UPDATE, ACTION_TYPE.DELETE, ACTION_TYPE.VIEW, ACTION_TYPE.READ], 'all')
      break;
    }
  }
  return build();
}

export const canAction = (action, resource) => {
  const role = window.localStorage.getItem('role');
  if(!role) return false;

  const ability = defineAbilitiesFor(role);
  return ability.can(action, resource);
}