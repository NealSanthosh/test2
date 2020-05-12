class Updater {
    constructor(){
      this.index = 1;
      this.name = null;
      this.email = null;
      this.q1 = null;
      this.q2 = null;
 
    } 
    go(){
      var voterIndex = "Voters/voter" + this.index;
      database.ref(voterIndex).set({
        name:this.name,
        email:this.email,
        q1:this.q1,
        q2:this.q2
      });
    }
  }
  