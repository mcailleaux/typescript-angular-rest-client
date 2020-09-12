import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  Body,
  Delete,
  Get,
  Path,
  Post,
  Put,
  RestClient,
} from 'typescript-rest-client';
import { v4 as uuidV4 } from 'uuid';
import { environment } from '@environments';
import { IUser } from '@model/user';
import { Client } from 'typescript-angular-rest-client';

@Injectable({
  providedIn: 'root',
})
@Client({
  serviceId: () => 'user',
  baseUrl: () => environment.config.apis.rootUrl,
  headers: () => {
    return { 'x-request-type': 'API' };
  },
})
export class UserService extends RestClient {
  private static readonly url = 'users';

  constructor(private http: HttpClient) {
    super(http);
  }

  public getDefaultHeaders(): { [p: string]: string } {
    return { 'x-request-id': uuidV4() };
  }

  protected requestInterceptor<T>(req: T) {
    console.dir(req);
  }

  protected responseInterceptor<T>(res: Observable<T>): Observable<any> {
    console.dir(res);
    return res;
  }

  @Get(() => `/${UserService.url}`)
  public getUsers(): Observable<IUser[]> {
    return null;
  }

  @Get(() => `/${UserService.url}/{id}`)
  public getUser(@Path('id') id: number): Observable<IUser> {
    return null;
  }

  @Post(() => `/${UserService.url}`)
  public createUser(@Body user: IUser): Observable<IUser> {
    return null;
  }

  @Put(() => `/${UserService.url}/{id}`)
  public editUser(
    @Path('id') id: number,
    @Body user: IUser
  ): Observable<IUser> {
    return null;
  }

  @Delete(() => `/${UserService.url}/{id}`)
  public deleteUser(@Path('id') id: number): Observable<void> {
    return null;
  }
}
