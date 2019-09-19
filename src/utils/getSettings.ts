export function getSettings(settings:{[key:string]:any} | undefined,item:string){
    if(settings){
        return settings[item];
    }
    return undefined;
}