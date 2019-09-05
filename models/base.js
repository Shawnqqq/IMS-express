const knex = require('./knex');

class Base{
  constructor(props){
    this.table = props
  }
  all(){
    return knex(this.table).select()
  }




}

module.exports = Base