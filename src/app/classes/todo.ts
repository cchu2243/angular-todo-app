export class Todo {
  public readonly id: string;

  constructor(public text: string, public complete: boolean = false){
    this.id = Date.now().toString(36);
  }
}
