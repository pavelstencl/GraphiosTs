import { AxiosError } from "axios";
import { GraphQlError } from "../types";

class GraphiosTsError extends Error{
    constructor(public code:string,message:string,name?:string){
        super(code+': '+message);
        this.code = code;
        this.name = name || 'GraphiosTsError'
    }
}

export class GraphiosTsGenericError extends GraphiosTsError{
    constructor(code:string,message:string){
        super('01-'+code,message,'GraphiosTsGenericError');
    }
}

export class GraphiosTsParseError extends GraphiosTsError{
    constructor(code:string,message:string){
        super('02-'+code,message,'GraphiosTsParseError');
    }
}

export class GraphiosTsNetworkError extends GraphiosTsError{
    constructor(code:string,public axios:AxiosError){
        super('03-'+code,axios.message,'GraphiosTsNetworkError');
        this.axios = axios;
    }
}

export class GraphiosTsGenericNetworkError extends GraphiosTsError{
    constructor(message:string){
        super('03-01',message,'GraphiosTsNetworkError');
    }
}

export class GraphiosTsDataError extends GraphiosTsError{
    constructor(message:string){
        super('04-01',message,'GraphiosTsDataError');
    }
}

function listErrors(errors?:GraphQlError[]){
    if(errors && Array.isArray(errors)){
        const out:string[] = [];
        for (let i = 0; i < errors.length; i++) {
            out.push(errors[i].message);
        }
        return out.join(' | ');
    }else{
        return '';
    }
}
export class GraphiosTsResponseError extends GraphiosTsError{
    constructor(public data:any,public errors:GraphQlError[]){
        super('05-01','GraphQl server responded with errors: '+listErrors(errors),'GraphiosTsResponseError');
        this.data = data;
        this.errors = errors;
    }
}