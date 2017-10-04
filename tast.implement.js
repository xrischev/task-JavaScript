function implement() {

    let jsonStructure={
        "_id": "E241AD11-1557-4FD3-B21F-97D0FA4230C7",
        "_rev": "13-2c82a95b6558a4c6144b58f59720edc7",
        "fp_type": "ibeacon",
        "fp_owner": "global",
        "fp_ext_id": "bstg_autogen_1445345099899_62005859",
        "uuid": "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
        "major": 37100,
        "minor": 51516,
        "label": "Icy Bond",
        "actions": [
            {
                "type": "home-block",
                "params": {
                    "appearance": "text",
                    "action": "open-location",
                    "link": {
                        "fp_type": "sponsor",
                        "fp_ext_id": "spotme"
                    }
                }
            },
            {
                "type": "presence",
                "params": {
                    "interval": 15
                }
            }
        ],
        "fp_last_changes": {
            "timestamp": 1445437699,
            "source": "dataloader_api",
            "host": "localhost.backstage.4pax.com"
        },
        "location": {
            "lat": -4.232423,
            "lng": 12.523098
        }
    }




    let notificationType={
        "type":"notification",
        "params":{
            "title":"new title",
            "message":"new message"
        }
    }


    jsonStructure.actions.push(notificationType)




    let jsonStructureAddNotificationType=jsonStructure

    $('#jsonTask1').text(JSON.stringify(jsonStructureAddNotificationType,undefined,2))




    jsonStructure.actions[0].params.appearance=null

    delete jsonStructure.actions[0].params['link']

    let setActionRemoveLink=jsonStructure

    $('#jsonTask2').text(JSON.stringify(setActionRemoveLink,undefined,2))


    let actionsTypeArray=[]

    for (let i = 0; i < jsonStructure.actions.length; i++) {
        actionsTypeArray.push(jsonStructure.actions[i].type)
    }

    let actionsTypesStrings= actionsTypeArray.join(', ')

    $('#underscoreTask1').text(actionsTypesStrings)


    let actionsNewObjects={}

    let type=""
    let value={}

    for (let i = 0; i < jsonStructure.actions.length; i++) {
        type= jsonStructure.actions[i].type


        value=jsonStructure.actions[i].params


        actionsNewObjects[type]=value

        type=""
        value=""
    }

    $('#underscoreTask2').text(JSON.stringify(actionsNewObjects))




    let numbers=["0", 2, 4, 6, null, [], 8, 10]


    let numbersNewArray=[]

    for (let i = 0; i < numbers.length; i++) {
        if(Number(numbers[i])){
           numbersNewArray.push(numbers[i])
        }
    }


    let sumNumbers=0

    for (let i = 0; i < numbersNewArray.length; i++) {
        sumNumbers+=numbersNewArray[i]
    }
    let average=sumNumbers/numbersNewArray.length

    $('#sum').text('sum : ' + sumNumbers)
    $('#average').text('average : ' + average)

    document.getElementById("textAreaJson").value = JSON.stringify(jsonStructure,undefined, 2);

    $.get("http://ipinfo.io", function(response) {
        console.log(response.ip)
    }, "jsonp");


}