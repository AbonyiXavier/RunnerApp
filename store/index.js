export const state = () => ({
  inProgress: false,
})

export const mutations = {
  IN_PROGRESS_ACTIVE(state) {
    state.inProgress = true
  },
}
