import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICard} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) {
  }

  fetchContent(): Observable<ICard[]> {
    return this.http.get<ICard[]>('http://localhost:3000/cards/');
  }
}
