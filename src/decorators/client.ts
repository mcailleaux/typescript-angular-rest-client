import { Client as GenericClient } from 'typescript-rest-client';
import { HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

export function Client(args: {
  serviceId?: () => string;
  baseUrl?: () => string;
  headers?: () => any;
}) {
  return <T extends Function>(Target: T): T => {
    return GenericClient({
      ...args,
      newHttpHeaders: (defaultHeaders?: { [name: string]: string }) =>
        new HttpHeaders(defaultHeaders),
      newHttpParams: () => new HttpParams(),
      newHttpRequest: (
        method: string,
        resUrl: string,
        body: any,
        init: { headers: any; params: any; withCredentials: boolean }
      ) => new HttpRequest(method, resUrl, body, init),
    })(Target);
  };
}
