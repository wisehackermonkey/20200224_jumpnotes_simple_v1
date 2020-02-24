export function initalizeDatabase(database_instance){
    //todo check if db is empty
    database_instance.defaults({notes:[]}).write()
}

export function DabaseSaveNote(database_instance,note_data){
    //save note to json database
    database_instance.get("notes")
      .push({text: note_data,time:Date.now()})
      .write()
}