export interface List {
    id: string;
    name: string;
    item: Item[];

}

export interface Item {
    list: string;
    id: string;
    title: string;
    description?: string;
    completed: boolean;
}

export interface WeatherFeature {
    cityName: string;
    degrees: string;
    pressure: string;
    sky: string;
}
