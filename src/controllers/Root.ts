import { Request, Response } from 'express'

class Root {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'online' })
  }
}

export default new Root().index
