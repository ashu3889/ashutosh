export default function(state = {}, action) {
  switch(action.type) {   
      case 'CHANGE_HEADER':
    
      return action.payload; 
    default :
    return state;
  }

  return state;
}
