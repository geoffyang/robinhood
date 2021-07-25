import { setUser, SET_USER } from "./session"

export const updateBalance = (amount, operator) => async (dispatch) => {
  const response = await fetch(`api/users/user-balance/${amount}/${operator}`, {
    method: 'POST'
  })
  if (response.ok){
    const user = await response.json()
    dispatch(setUser(user))
  }
}
