export function sortAscending(list) {
    list.sort((a, b) => {
        const firstItem = a.first_name+ ' ' + a.last_name;
        const secondItem = b.first_name+ ' ' + b.last_name;

        if( firstItem < secondItem) 
            return -1;
        else if (firstItem > secondItem) 
            return 1;
        else 
            return 0;
    });
    return list;
}

export function sortDescending(list) {
    list.sort((a, b) => {
        const firstItem = a.first_name+ ' ' + a.last_name;
        const secondItem = b.first_name+ ' ' + b.last_name;

        if( firstItem < secondItem) 
            return 1;
        else if (firstItem > secondItem) 
            return -1;
        else 
            return 0;
    });
    return list;
}