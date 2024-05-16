export class User {
  constructor(
    public id: number,
    public username: string,
    public firstname: string,
    public lastname: string,
    public email: string
  ) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
