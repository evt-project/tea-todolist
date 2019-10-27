interface List{
    id: string;
    name: string;
    item: Item[];

};

interface Item {
    list: string;
    id: string;
    title: string;
    description?: string;
    completed: boolean;
};

export type ListOfList = List[];
