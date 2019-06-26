export default {
  randomEntity: () => {
    return Promise.resolve({
      data: {
        entries: [
          { API: 'test', Link: 'link' }
        ]
      }
    })
  }
}
