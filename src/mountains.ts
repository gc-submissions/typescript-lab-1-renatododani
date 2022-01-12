export interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
];

export function findNameOfTallestMountain(mountains:Mountain[]):string {
    let heighestMountain: string = '';
    if (mountains.length === 0 ){
        return heighestMountain;
    }; 
    
    const heighest: number = Math.max(...mountains.map(h => h.height));
    mountains.find((mountain) => {
        if (mountain.height === heighest) {
            heighestMountain = mountain.name;
        }
    });
    return heighestMountain;
};

const result = findNameOfTallestMountain(mountains);
console.log(result);
