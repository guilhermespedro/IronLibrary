export const prices = [
{
_id:0,
name: "Any",
array: []
},

{

    
    _id:1,
    name: "Any",
    array: [0,9]
    },

    {
        _id:2,
        name: "Any",
        array: [10,19]
        },

        {
            _id:3,
            name: "Any",
            array: [20,29]
            },

            {
                _id:4,
                name: "Any",
                array: [30,39]
                },
                {
                _id:5,
                name: "Any",
                array: [40,100]
                }


]

const handlePrice = value => {
    const data = prices
    let array = []

    for (let key in data) {
        if (data[key]._id=== parseInt(value)) {
            array = data [key].array
        }
    }
}




