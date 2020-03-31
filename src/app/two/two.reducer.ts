import * as actions from './two.actions';

const initialState = {
  items: [
    {title: 'one'},
    {title: 'two'},
    {title: 'three'}
  ]
}

export function twoReducer(
                            state = initialState,
                            action: actions.ItemsType) {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
      case actions.ADD_INGREDIENTS:
        return {
          ...state,
          items: [
            ...state.items,
            ...action.payload
          ]
        };
    default:
      return state;
  }
}
