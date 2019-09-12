export default function createReducer(initState: any, handlers: any) {
  return function reducer(state = initState, action: any) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
}
