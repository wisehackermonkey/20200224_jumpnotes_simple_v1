"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initalizeDatabase = initalizeDatabase;
function initalizeDatabase(database_instance) {
    //todo check if db is empty
    database_instance.defaults({ notes: [] }).write();
}
//# sourceMappingURL=helpers.js.map