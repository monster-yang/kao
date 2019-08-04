export default {
  methods: {
    select (index) {
      console.log(index)
      if (index === '2') {
        console.log(1)
        this.$router.push('/appraisal')
      }
    }
  }
}
