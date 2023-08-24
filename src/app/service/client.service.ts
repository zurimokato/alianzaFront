import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client.model';
import { Page } from '../interfaces/page.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }


  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  getClient(id: number): Observable<Client> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  getClients(page: number, size: number): Observable<Page<Client>> {
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get<Page<Client>>(url);
  }

  updateClient(updatedClient: Client): Observable<Client> {
    const url = `${this.apiUrl}/${updatedClient.document}`;
    return this.http.put<Client>(url, updatedClient);
  }

  deleteClient(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
