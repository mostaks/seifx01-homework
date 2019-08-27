
let mta = [
    ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    ['8th', '6th', 'Union Square', '3rd', '1st'],
    ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
];

startStation = '33rd';
finalStation = '23rd'

function trip(mtaLine){
    for (i=0 ; i < mtaLine.length; i++){
       
        if (!(mtaLine[i] !== finalStation && i < mtaLine.length)&&(!(mtaLine[i] === finalStation))){
            while (mtaLine[i] !== finalStation && i < mtaLine.length)
            { console.log(mtaLine[i] && mtaLine[i] !== 'Union Square');
                i +=1;}
            
            console.log('Change at Union Square');
        }

        if(mtaLine[i] === startStation){
           while (mtaLine[i] !== finalStation && i < mtaLine.length)
            { console.log(mtaLine[i]);
                i +=1;}
            }
        
        if (mtaLine[i] === finalStation){
                console.log(finalStation);
            }
        // else if (!(mtaLine[i] !== finalStation && i < mtaLine.length)&&(!(mtaLine[i] === finalStation)))
        //     {
        
        // console.log('Change at Union Square');}
        
    } 
}

//trip(mta[0])
//trip(mta[1])
trip(mta[2])