export const SAVE_NAVIGATED_ROUTE = '[AppState] Save navigated route'
export class NavigatedRoute {
  public static readonly type = SAVE_NAVIGATED_ROUTE
  constructor(public url: string) {}
}
