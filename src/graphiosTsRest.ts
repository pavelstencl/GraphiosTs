import { RestSchema, getPayload } from "./types/schema";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { GraphiosTsRestSettings } from "./types";
import { GraphiosTsGenericError } from "./errors";

type Replace<S,T,K extends string> = {
    [U in keyof S]:U extends K?T:S[U];
}

export class GraphiosTsRest<T = RestSchema>{
    private settings:GraphiosTsRestSettings;
    constructor(private axios:AxiosInstance,settings?:Partial<GraphiosTsRestSettings>){
        this.axios = axios;
        this.settings = {...{
            'axios':{},
            'refetch':0,
            'refetchPause':100
        },...settings};
    }
    public request<U extends keyof T,A extends keyof T[U]>(
    method:U,
    action:A,
    config:Omit<T[U][A],'payload'> & {axios?:AxiosRequestConfig}
    ):Promise<Replace<AxiosResponse,getPayload<T[U][A]>,'data'>>{
        const c = (config as {[key:string]:any});
        return this.axios.request({
            ...this.settings.axios,
            ...config.axios,
            ...{
                'method':method as ('POST'|'DELETE'|'PUT'|'GET'),
                'url':this.getPath(action,c.vars,c.args),
                'data':c.data
            }
        });
    }

    private getPath(path:string | symbol | number,vars?:{[key:string]:any},args?:{[key:string]:any}):string{
        let p = (typeof path === 'string'?path:path.toString());
        const a = this.getArgs(args);
        if(vars){
            p = p.replace(/\/:([a-zA-Z0-9]+)\//g,(match,p1)=>{
                if(vars[p1]){
                    return `/${vars[p1]}/`;
                }else{
                    throw new GraphiosTsGenericError('08',`Path ${p} expects variable \`${p1}\`.`);
                }
            });
        }
        return p+a;
    }
    private getArgs(args?:{[key:string]:any}):string{
        if(args){
            const out:string[] = [];
            for (const key in args) {
                out.push(key+'='+args[key]);
            }
            return '?'+out.join('&');
        }else{
            return '';
        }
    }
}