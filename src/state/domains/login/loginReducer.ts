type ActionType = {type: string, payload: any}

export const LoginReducer = (state: string | null = null, action: ActionType) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload

    case "LOGOUT":
      return null

    default:
      return state
  }
}
