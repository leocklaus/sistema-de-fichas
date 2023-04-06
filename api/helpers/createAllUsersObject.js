const slugs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function dataModel(){
    const data = [];
    for(const slug of slugs){
        data.push({
            slug: slug,
            content: [],
        })
    }

    return data;
}

async function createAllUsersObject(clients){

    const data = dataModel();

    clients.forEach((client)=>{
        slugs.forEach((slug, index)=>{
            if(client.name.toLowerCase()[0] === slug){
                data[index].content.push(client);
            }
        })
    })

    return data;
}

module.exports = {createAllUsersObject};