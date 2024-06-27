export interface Controller {
  run: (req: any, res: any) => Promise<void>
}
