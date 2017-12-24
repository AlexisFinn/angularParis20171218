export enum State {
  ALIVRER,
  ENCOURS,
  LIVREE
}

export namespace State {
  export function label(state: State) {
    let text: string;
    switch (state) {
      case State.ALIVRER:
      text = 'A livrer';
      break;
      case State.ENCOURS:
      text = 'En cours';
      break;
      case State.LIVREE:
      text = 'Livrée';
      break;
      default:
      console.log(state);
    }
    return text;
  }
}
