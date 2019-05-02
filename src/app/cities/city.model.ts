import { pointOfInterest } from '../point-of-interest/point-of-interest.model';

export class City {
    id: number;
    name: string;
    description: string;
    numberOfPointsOfInterest: number;
    pointsOfInterest: pointOfInterest[];

    constructor(id: number, name: string, description: string, numPointsOfInt: number, POI: pointOfInterest[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.numberOfPointsOfInterest = numPointsOfInt;
        this.pointsOfInterest = POI;
    }
}

