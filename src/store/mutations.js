export default {
  changeCity (state, val) {
    state.city = val;
    localStorage.city = val;
  }
}
