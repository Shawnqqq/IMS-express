const knex = require('./knex');

class Base{
  constructor(props){
    this.table = props
  }
  all(){
    return knex(this.table).whereNull('isdeleted').select()
  }
  single(id){
    return knex(this.table).where('id','=',id)
  }
  where(id){
    return knex(this.table).where(id)
  }
  insert(params){
    return knex(this.table).insert(params)
  }
  update(id,params){
    return knex(this.table).where('id','=',id).update(params)
  }
  whole(){
    return knex(this.table).select()
  }
  deleted(id){
    return knex(this.table).where('id','=',id).del()
  }
}

module.exports = Base