export default ( store = { 'A': 0, 'B': 0}, action) => {
  switch (action.type) {
    case 'INCREMENTA':
      return {
              'A': store.A + 1, 
              'B': store.B
             }
    case 'INCREMENTB':
      return {
              'A': store.A, 
              'B': store.B + 1
             }
    default:
      return { 'A': store.A, 'B': store.B}
  }
}
