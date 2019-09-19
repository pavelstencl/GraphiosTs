import { GraphTsPayload, RequestPayload, Validate} from "../types/schema";

export class GtsFragment<S extends GraphTsPayload>{
    public data<T>(p:T & RequestPayload<S> & Validate<T,RequestPayload<S>>):T{
        return p;
    }
}
export class GtsAlias<S extends GraphTsPayload>{
    public data<T>(payload:T & RequestPayload<S> & Validate<T,RequestPayload<S>>):{__type:'alias';payload:T}{
        return {
            __type:'alias',
            payload:payload
        }
    }
}