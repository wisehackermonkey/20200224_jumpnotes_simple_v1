export function initalizeDatabase(database_instance){
    //todo check if db is empty
    database_instance.defaults({notes:[]}).write()
}