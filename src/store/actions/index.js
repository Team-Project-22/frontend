export const addCart = (db) => {
    return {
        type: "ADD_ITEM",
        payload: db
    }
}

export const deleteCart = (dbs) => {
    return {
        type: "DELETE_ITEM",
        payload: dbs
    }
}