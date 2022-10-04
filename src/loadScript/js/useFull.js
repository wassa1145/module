console.log('useFull')

loadScript('js/a.js', () => {
  let a = 1000
  console.log('From useFull ', a)

  loadScript('js/b.js', () => {
    console.log('result summ a + b = 21 ', a + b)
  })
})