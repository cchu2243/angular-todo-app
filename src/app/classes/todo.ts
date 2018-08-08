export class Todo {
  public readonly id: string;
  public complete: boolean = false;
  public edit: boolean = false;
  public text: string = '';

  constructor(jsonObject: any)
  constructor(text: string)
  constructor(jsonObjectOrText: any)
  {
    if(jsonObjectOrText.hasOwnProperty('id')) {
      Object.assign(this, jsonObjectOrText);
    } else {
      this.id = Date.now().toString(36);
      this.text = jsonObjectOrText;
    }
  }
}
