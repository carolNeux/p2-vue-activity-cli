export default{
  // Dejo a modo de ejemplo, pero no los usamos. 
  // En ActivityItem lo dejo tambien para saber como interpolarlo
  // data(){
  //   return {
  //     utilityName: 'Recomended book by',
  //     creator: 'Filip Jerga'
  //   }
  // },
  // computed:{
  //   fullname(){
  //     return this.utilityName + ' ' + this.creator
  //   }
  // },
  methods: {
    textUtility_capitilize(word){
      if(word && typeof 'string'){
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    }
  }
}