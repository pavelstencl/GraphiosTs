/**
 * Determines if object is selected fragment.
 * @param data Result data
 * @param name Name of fragment - with `__on` prefix -> example `__onHumans` is Humans in `__typename`
 */
//@ts-ignore
export function isFragment<T extends{__typename:string},K extends keyof T>(source:T,name:K):source is Exclude<T[K],void>{
    const typename = (name as string).substring(4);
    return source.__typename === typename?true:false;
}

export function getFragment<T extends {[key:string]:any}>(data:T){
    return data as Pick<T,cleanFragment<T>>;
}
type cleanFragment<T> = {
    [K in keyof T]:Extract<T[K],void> extends never?K:never
}[keyof T]