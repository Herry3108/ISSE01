import { HouseInterface } from './house.interface';

export interface HousesStateInterface {
    isLoading: boolean;
    houses: HouseInterface[];
    error: string | null;
        
}