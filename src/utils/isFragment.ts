/**
 * Determines if object is selected fragment.
 * @param data Result data
 * @param name Name of fragment - with `__on` prefix -> example `__onHumans` is Humans in `__typename`
 */
//@ts-ignore
export function isFragment<T extends{__typename:string},K extends keyof T>(data:T,name:K):data is Exclude<T[K],void>{
    const typename = (name as string).substring(4);
    return data.__typename === typename?true:false;
}