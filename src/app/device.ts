export class Device {

    name: string;
    assetPath: string;

    constructor(name: string,assetPath: string){
        this.name = name;
        this.assetPath = assetPath;
    }

    public equals(obj: Device) : boolean {
        return this.name === obj.name && this.assetPath === obj.assetPath;
    }

}
