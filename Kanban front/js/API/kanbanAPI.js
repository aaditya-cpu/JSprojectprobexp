// Local storage

// read() --> takes in the data from the local storage
// save() --> saves the data in the local Storage

export default class KanbanAPI {

    static getItems(columnID) {

        const column = read().find(column => column.id == columnID);

        if (!column) {
            return [];
            alert("No data found! Kuch kar ke dikhao");
        }

        return column.items;



    }


}




function read() {
    const json = localStorage.getItem("KanbanData");
    if (!json) {
        return [

            {

                id: 1,
                items: []

            },
            {

                id: 2,
                items: []

            },

            {

                id: 3,
                items: []

            },

            {

                id: 4,
                items: []

            },





        ];
    }

    return JSON.parse(json);
}

// read will return --> data carried to save


function save(data) {

    localStorage.setItem("KanbanData", JSON.stringify(data));

}